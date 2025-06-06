import { create } from "zustand";
import { TSong } from "@/lib/placeholder-data";

type PlayerState = {
  currentSong?: TSong;
  isPlaying: boolean;
  togglePlaying: () => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setCurrentSong: (song: TSong) => void;
};

export const useSongStore = create<PlayerState>()((set) => ({
  currentSong: undefined,
  isPlaying: false,
  togglePlaying: () => {
    set((state) => ({
      isPlaying: !state.isPlaying,
    }));
  },
  setIsPlaying: (isPlaying) => set({ isPlaying: isPlaying }),
  setCurrentSong: (song) => set({ currentSong: song }),
}));
