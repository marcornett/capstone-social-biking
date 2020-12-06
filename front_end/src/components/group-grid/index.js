// export * from './GroupGrid'
import {GroupGrid} from './GroupGrid'
import {enhancer} from './GroupGrid.enhancer'

export const GroupGridContainer = enhancer(GroupGrid)