
import {atomFamily} from "recoil"
import { TODOS } from "./todo"


export const todosAtomFamily = atomFamily({
    key:"todosAtomFamily",
    default: id => {
        return TODOS.find(todo => todo.id == id)
    }
})