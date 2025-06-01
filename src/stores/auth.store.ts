import { create } from 'zustand';
import { persist } from 'zustand/middleware';


interface AuthState {
  token: string | null;
  user: { 
    email: string; 
    uuid: string; 
    profilePictureUrl?: string, 
    pseudo: string} | null;
  isLoggedIn: boolean;
  login: (payload: { token: string; user: AuthState['user'] }) => void;
  logout: () => void;
  modalOpen: boolean;
  openModal: (open: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  
  persist(
    (set) => ({
        modalOpen: false,
  openModal: (open) => set({ modalOpen: open }),
      token: null,
      user: null,
      isLoggedIn: false,
      login: ({ token, user }) =>
        set({ token, user, isLoggedIn: true }),
      logout: () =>
        set({ token: null, user: null, isLoggedIn: false }),
    }),
    {
      name: 'auth-storage', // nom de la clé dans localStorage
    }
  )
);


