import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const initialState = {
  user: {
    time: 0,
    date: new Date(),
    locationSelected: null,
    geolocation: {
      latitude: null,
      longitude: null,
    },
  },
}

export const useStoreUser = create(
  persist(
    (set) => ({
      user: initialState.user,
      setUserTime: (time) =>
        set((state) => {
          return { user: { ...state.user, time } }
        }),
      setUserDate: (date) =>
        set((state) => {
          return { user: { ...state.user, date, time: 0 } }
        }),
      setUserGeolocation: (geolocation) =>
        set((state) => ({ user: { ...state.user, geolocation } })),
      setSelectedUserLocation: (locationSelected) =>
        set((state) => ({ user: { ...state.user, locationSelected } })),
    }),
    { name: 'user-storage' }
  )
)

export default useStoreUser
