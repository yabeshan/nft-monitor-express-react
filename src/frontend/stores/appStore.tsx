import axios from 'axios'
import { create } from 'zustand'

type TAppStore = {
  version: string

  init(): void
  getVersion(): void
}

export const appStore = create<TAppStore>((set, get) => ({
  version: '0',

  init: async () => {
    get().getVersion()
  },
  
  getVersion: async () => {
    try {
      const res = await axios.post('api/version')
      console.log('___store api/version res___', res.data )
      set({ 
        version: res.data.version
      })
    } catch (err) {
      set({ 
        version: 'error'
      })
    }
  }

}))

export default appStore