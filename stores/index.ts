import { createStore, createLogger } from 'vuex'
import {
  store as user,
  UserStore,
  State as UserState,
} from '~/stores/modules/user'

export type RootState = {
  user: UserState
}

export type Store = UserStore<Pick<RootState, 'user'>>

const plugins = process.env.DEBUG ? [createLogger()] : []

export const store = createStore({
  strict: true,
  plugins,
  modules: {
    user,
  },
})

export function useStore(): Store {
  return store as Store
}
