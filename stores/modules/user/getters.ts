import { GetterTree } from 'vuex'
import { State } from './state'
import { RootState } from '~/stores'
import { UserInterface } from '~/interfaces/modules/User.interface'

export type Getters = {
  userList(state: State): UserInterface[]
}

export const getters: GetterTree<State, RootState> & Getters = {
  userList: (state) => state.userList,
}
