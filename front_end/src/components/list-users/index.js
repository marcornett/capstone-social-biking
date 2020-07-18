// export * from "./ListUsers"
import {ListUsers} from './ListUsers'
import {enhancer} from './ListUsers.enhancer'

export const ListUsersContainer = enhancer(ListUsers)