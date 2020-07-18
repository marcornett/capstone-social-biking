// export * from './Register'
import { Register } from "./Register"
import { enhancer } from "./Register.enhancer"

export const RegisterContainer = enhancer(Register);