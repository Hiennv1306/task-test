import { MutationTree } from 'vuex'
import { State } from './state'
import { UserEnum } from '~/stores/enums/user.enum'
import { UserInterface } from '~/interfaces/modules/User.interface'

export type Mutations<S = State> = {
  [UserEnum.ADD_USER](state: S, payload: UserInterface): void
  [UserEnum.EDIT_USER](state: S, payload: {id: number, data: UserInterface}): void
  [UserEnum.DELETE_USER](state: S, id: number): void
}

export const mutations: MutationTree<State> & Mutations = {
  [UserEnum.ADD_USER](state: State, payload: UserInterface) {
    state.userList.push({
      ...payload,
      id: (state.userList[state.userList?.length - 1]?.id || 0) + 1
    })
  },
  [UserEnum.EDIT_USER](state: State, payload: {id: number, data: UserInterface}) {
    const userIndex: number = state.userList.findIndex(item => item.id === payload.id);

    state.userList[userIndex] = {
      ...payload.data,
      id: payload.id,
    }
  },
  [UserEnum.DELETE_USER](state: State, id: number) {
    state.userList = state.userList.filter((item: UserInterface) => item.id !== id)
  },
}
