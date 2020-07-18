// export * from './EventList'
import{ EventList } from "./EventList";
import { enhancer } from "./EventList.Enhancer"

export const EventListContainer = enhancer(EventList);