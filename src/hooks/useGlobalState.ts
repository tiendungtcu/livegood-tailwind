import { create } from 'zustand';

export interface GlobalState {
  openConfirmModal: boolean;
  toggleConfirmModal: (payload: boolean) => void;
}
const useGlobalState = create<GlobalState>((set) => ({
  openConfirmModal: false,
  toggleConfirmModal: (payload) => set({ openConfirmModal: payload }),
  confirmModal: {},
}));

export default useGlobalState;
