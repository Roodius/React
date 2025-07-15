
import {atomFamily, selectorFamily} from "recoil"
import { TODOS } from "./todo"
import axios from 'axios'

export const todosAtomFamily = atomFamily({
    key:"todosAtomFamily",
    default: selectorFamily({
        key:"todoSelectorFamily",
        get:(id) => async () => {
            const res = await axios.get(`http://localhost:3000/getTodo/${id}`)
            console.log(res)
            return res.data
        }
    })
})

