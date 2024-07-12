import { create } from "zustand";
import { useStates } from "@/lib/types";

const useStatesStore = create<useStates>((set) => ({
  isScrolled: false,
  setIsScrolled: (isScrolled: boolean) => set({ isScrolled }),
}));

export { useStatesStore };
