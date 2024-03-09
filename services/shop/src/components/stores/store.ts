import { create } from 'zustand'

export default create((set) => ({
    bears: 0,
    increasePopulation: (bears: number) => set(() => ({ bears })),
}))