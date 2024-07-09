import { create } from 'zustand'
import { persist } from 'zustand/middleware'


export const useVideoStore = create(
  persist(
    (set) => ({
      collection:[],
      setCollection:(newCollection) => set({ collection: newCollection })
    }),
    {
      name: 'video', 
    },
  ),
)
