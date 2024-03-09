import { create } from 'zustand'

export const useStore = create((set) => ({
    bears: 0,
    increasePopulation: (bears: number) => set(() => ({ bears })),
}))