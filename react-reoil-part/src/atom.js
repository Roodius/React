import {atom, selector} from 'recoil'

export const networkAtom = atom({
    key:"networkAtom",
    default:102
});

export const JobsAtom = atom({
    key:"JobsAtom",
    default:5
})

export const notificationsAtom = atom({
    key:"notificationsAtom",
    default:12
})

export const messagingsAtom = atom({
    key:"messagingsAtom",
    default:0
})

// ---------------------------------------

export const totalNotificationSelector = selector({
    key:"totalNotificationSelector",
    get:({get}) => {
         const networkAtomCount = get(networkAtom);
         const JobsAtomCount  = get(JobsAtom);
         const notificationsAtomCount = get(notificationsAtom);
         const messagingsAtomCount = get(notificationsAtom);
         
         return networkAtomCount + JobsAtomCount + notificationsAtomCount  + messagingsAtomCount 
         
    }
}) 
