import { create } from 'zustand'
import { persist } from 'zustand/middleware'


export const useVideoStore = create(
  persist(
    (set) => ({
      hotVideos:[],
      setHotVideos:(videos) => set({ hotVideos: videos }),
      dancerCards:[],
      setDancerCards:(newDancerCard) => set({ dancerCards: newDancerCard }),
    }),
    {
      name: 'video', 
    },
  ),
)
