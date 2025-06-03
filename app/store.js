import { create } from "zustand";

export const songStore = create((set) => ({
  currentSong: null,
  isPlaying: false,
  togglePlaying: () => {
    set((state) => ({
      isPlaying: !state.isPlaying,
    }));
  },
  setPlaying: (playing) => set({ isPlaying: playing }),
  setCurrentSong: (song) => set({ currentSong: song }),
}));
