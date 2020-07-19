// export * from "./CreateAGroup"
import{ CreateAGroup } from "./CreateAGroup";
import { enhancer } from "./CreateAGroup.enhance"

export const CreateAGroupContainer = enhancer(CreateAGroup);