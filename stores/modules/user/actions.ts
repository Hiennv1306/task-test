import { ActionTree, ActionContext } from 'vuex'
import { Mutations } from './mutations'
import { State } from './state'
import { UserEnum } from '~/stores/enums/user.enum'
import { RootState } from '~/stores'
import { UserInterface } from '~/interfaces/modules/User.interface'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, RootState>, 'commit'>

export interface Actions {
  [UserEnum.ADD_USER](
    { commit }: AugmentedActionContext,
    payload: UserInterface
  ): Promise<boolean>
  [UserEnum.EDIT_USER](
    { commit }: AugmentedActionContext,
    payload: {id: number, data: UserInterface}
  ): Promise<boolean>
  [UserEnum.DELETE_USER](
    { commit }: AugmentedActionContext,
    id: number
  ): Promise<boolean>
}

export const actions: ActionTree<State, RootState> & Actions = {
  [UserEnum.ADD_USER]({ commit }, payload: UserInterface) {
    return new Promise(() => {
      commit(UserEnum.ADD_USER, payload)
    })
  },
  [UserEnum.EDIT_USER]({ commit }, payload: {id: number, data: UserInterface}) {
    return new Promise(() => {
      commit(UserEnum.EDIT_USER, payload)
    })
  },
  [UserEnum.DELETE_USER]({ commit }, id: number) {
    return new Promise(() => {
      commit(UserEnum.DELETE_USER, id)
    })
  },
}
