
import axios from 'axios';
import {atom, selector} from 'recoil'

export const notificationsAtom  = atom({
    key:"notifications",
    default: selector({
        key:"notificationsAtomSelector",
        get: async () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                         axios.get('http://localhost:3000/getState')
                        .then((res) => {
                            resolve(res.data)
                        }).catch((err) => {
                            reject(err)
                        })
                }, 1000)
            })
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
