import { atom, selector } from "recoil"


export const countAtom  =  atom({
    key:"countAtom",
    default: 0,  
})

export const evenSelectore = selector({
    key:"evenSelectore",
    get: ({get}) => {
        const count = get(countAtom);
        return count % 2;
    }
})


export const todoAtom = atom({
    key:"todoAtom",
    default:[]
})