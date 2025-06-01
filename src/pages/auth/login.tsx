import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from '../../stores/auth.store';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error("Login failed");

          const { token, user } = await res.json(); // On suppose que ton backend renvoie { token, user }

      useAuthStore.setState({
        token,
        user: {
          email: user.email,
          uuid: user.uuid,
          pseudo: user.pseudo,
          profilePictureUrl: user.profilePictureUrl || undefined, // Assurez-vous que profilePictureUrl est optionnel
        },
        isLoggedIn: true,
      });

      navigate("/");
    } catch (err) {
      throw new Error("Login failed: " + (err instanceof Error ? err.message : "Unknown error"));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 px-4">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl rounded-2xl p-8">
        <h2 className="text-white text-3xl font-semibold mb-6 text-center">Welcome back 👋</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              className="mt-1 w-full px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@fluendio.app"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              className="mt-1 w-full px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white py-2 rounded-lg font-medium"
          >
            Sign in
          </button>
        </form>
        <p className="text-center text-gray-400 text-sm mt-6">
          Don’t have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-blue-400 hover:underline"
          >
            Create one
          </button>
        </p>
      </div>
    </div>
  );
}