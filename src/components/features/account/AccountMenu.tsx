import Avatar from '../../common/Avatar';
import type AccountMenuProps from './interfaces/AccountMenuInterface';

export default function AccountMenu({ toggleModal, modalOpen, isLoggedIn, handleLogout, handleLogin, user }: AccountMenuProps) {
  return (
    <div className="relative">
      {/* Button to toggle the modal */}
      <button onClick={toggleModal}>
        <Avatar src={user?.profilePictureUrl} />
      </button>

      {/* Modal for account options */}
      {modalOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md p-4 z-10">
          {isLoggedIn ? (
            <>
              <button className="w-full text-left hover:underline">Settings</button>
              <button
                className="w-full text-left text-red-600 hover:underline"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            
            <button
              className="w-full text-left text-blue-600 hover:underline"
              onClick={handleLogin}
            >
              Login
            </button>
          )}
        </div>
      )}
    </div>
  );
}
