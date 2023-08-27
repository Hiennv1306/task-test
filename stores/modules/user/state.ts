import { UserInterface } from '~/interfaces/modules/User.interface'

export type State = {
  userList: UserInterface[]
}

export const state: State = {
  userList: [
    {
      id: 1,
      name: 'User 1',
      phone: '0123456789',
      year_of_birth: 1996
    },
    {
      id: 2,
      name: 'User 2',
      phone: '0345666999',
      year_of_birth: 1999
    },
  ],
}
