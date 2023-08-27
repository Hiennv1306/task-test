import { MutationTree } from 'vuex'
import { State } from './state'
import { UserEnum } from '~/stores/enums/user.enum'
import { UserInterface } from '~/interfaces/modules/User.interface'

export type Mutations<S = State> = {
  [UserEnum.ADD_USER](state: S, payload: UserInterface): void
}

export const mutations: MutationTree<State> & Mutations = {
  [UserEnum.ADD_USER](state: State, payload: UserInterface) {
    state.userList.push({
      ...payload,
      id: state.userList[state.userList?.length - 1].id + 1
    })
  },
}
