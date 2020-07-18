// export * from './YourGroups'
import { YourGroups } from "./YourGroups"
import { enhancer } from './Yourgroups.enhancer'



export const YourGroupsContainer = enhancer(YourGroups)