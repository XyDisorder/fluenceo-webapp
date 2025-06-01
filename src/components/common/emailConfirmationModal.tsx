import type { FC } from 'react';

type Props = {
  email: string;
  onClose: () => void;
};

const EmailConfirmationModal: FC<Props> = ({ email, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl">
        <div className="text-center space-y-4">
          <svg
            className="mx-auto w-12 h-12 text-blue-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 12.75v1.5a2.25 2.25 0 01-2.25 2.25h-4.5A2.25 2.25 0 017.5 14.25v-1.5M21 8.25v7.5a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15.75v-7.5m18 0A2.25 2.25 0 0018.75 6H5.25A2.25 2.25 0 003 8.25m18 0l-9 6.75L3 8.25"
            />
          </svg>

          <h2 className="text-xl font-semibold">Confirmation par email</h2>
          <p className="text-gray-700">
            Un email de confirmation a été envoyé à <strong>{email}</strong>. Clique sur le lien
            pour activer ton compte.
          </p>

          <button
            onClick={onClose}
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
          >
            Revenir à la connexion
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailConfirmationModal;