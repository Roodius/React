
import axios from 'axios';
import {atom, selector} from 'recoil'

export const notificationsAtom  = atom({
    key:"notifications",
    default: selector({
        key:"notificationsAtomSelector",
        get: async () => {
            const res = axios.get('http://localhost:3000/getState')
            return res.data;
        }   
    })
})

// ---------------------------------------

export const totalNotificationSelector = selector({
    key:"totalNotificationSelector",
    get:({get}) => {
         const allNotifications = get(notificationsAtom);
         return allNotifications.network + allNotifications.jobs + allNotifications.messaging + allNotifications.notification;
    }
}) 
