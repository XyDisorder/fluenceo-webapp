import { useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuthStore } from '../../stores/auth.store';

export default function EmailVerified() {
  const [params] = useSearchParams();
  const status = params.get('status'); // success | error
  const { user } = useAuthStore();
  const [email, setEmail] = useState(user?.email || '');
  const navigate = useNavigate();

  const [resendStatus, setResendStatus] = useState<'idle' | 'loading' | 'sent' | 'error' | 'already'>('idle');

  const isSuccess = status === 'success';

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        navigate('/login');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [navigate, isSuccess]);

  const handleResend = async () => {
    if (!email) return;
    setResendStatus('loading');
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/resent-confirmation-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.status === 201) {
        setResendStatus('sent');
      } else if (res.status === 400) {
        const data = await res.json();
        if (data.message === 'Email already verified') {
          setResendStatus('already');
        } else {
          setResendStatus('error');
        }
      } else {
        throw new Error();
      }
    } catch {
      setResendStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-4">
      <div className="bg-[#111827] text-white rounded-2xl shadow-xl w-full max-w-md p-8 space-y-6 border border-gray-700 text-center">
        {isSuccess ? (
          <>
            <div className="text-green-400">
              <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="1.5"
                viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <h2 className="text-2xl font-bold">Email verified ✅</h2>
              <p className="mt-2 text-gray-300">You can now log in to your account.</p>
            </div>
          </>
        ) : (
          <>
            <div className="text-red-400">
              <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="1.5"
                viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-.01-10a9 9 0 11-0.01 0z" />
              </svg>
              <h2 className="text-2xl font-bold">Verification failed ❌</h2>
              <p className="mt-2 text-gray-300">The link may be expired or invalid.</p>
            </div>

            <input
              type="email"
              className="mt-4 w-full px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@fluendio.app"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button
              onClick={handleResend}
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
              disabled={resendStatus === 'loading' || resendStatus === 'sent'}
            >
              {resendStatus === 'loading' && 'Resending...'}
              {resendStatus === 'sent' && 'Email sent ✅'}
              {resendStatus === 'already' && 'Email already verified'}
              {resendStatus === 'error' && 'Failed to resend'}
              {resendStatus === 'idle' && 'Resend confirmation email'}
            </button>

  

            {resendStatus === 'already' || resendStatus === 'sent' && (
              <button
                onClick={() => navigate('/login')}
                className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition"
              >
                Go to login
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}