import { useAuthStore } from '../../stores/auth.store';
import AccountMenu from '../features/account/AccountMenu';
import { useNavigate } from "react-router-dom";

export default function AccountContainer() {
  const navigate = useNavigate();

  const { isLoggedIn, user, modalOpen, openModal, logout } = useAuthStore();
  const toggleModal = () => openModal(!modalOpen);

  const handleLogin = () => {
    openModal(false);
    navigate("/login");
  };

  const handleLogout = () => {
    logout();
    openModal(false);
  };

  return (
    <div className="flex items-center justify-end">
      <AccountMenu 
        toggleModal={toggleModal}
        modalOpen={modalOpen}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
        handleLogin={handleLogin}
        user={user}
      />
    </div>
  );
}