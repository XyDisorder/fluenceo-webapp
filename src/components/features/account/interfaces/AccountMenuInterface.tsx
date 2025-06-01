export default interface AccountMenuProps {
  toggleModal: () => void;
  modalOpen: boolean;
  isLoggedIn: boolean;
  handleLogout: () => void;
  handleLogin: () => void;
  user: { profilePictureUrl?: string } | null;
}