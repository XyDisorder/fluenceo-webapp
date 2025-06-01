import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Login from "./pages/auth/login";
import SignupPage from "./pages/auth/signup";
import EmailVerified from "./pages/auth/emailVerified";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/email-verified" element={<EmailVerified />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}
