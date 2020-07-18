// export * from './GroupBanner'
import{GroupBanner} from "./GroupBanner"
import {enhancer} from "./GroupBanner.Enhancer"

export const GroupBannerContainer = enhancer(GroupBanner);