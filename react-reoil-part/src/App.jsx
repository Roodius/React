import {useRecoilValue, RecoilRoot, useRecoilState} from 'recoil'
import { JobsAtom, messagingsAtom, networkAtom, notificationsAtom, totalNotificationSelector } from "./atom"
import { useMemo } from 'react';

function App() {

  return <>
      <RecoilRoot>
          <Topbar/>
      </RecoilRoot>
      </> 
}


function Topbar(){
    const  networkNotificationsCount = useRecoilValue(networkAtom);
    const  jobsNotificationsCount = useRecoilValue(JobsAtom);
    const  MessagindNotificationsCount = useRecoilValue(messagingsAtom);
    const  NotificationsCount = useRecoilValue(notificationsAtom);
    const totalNotificationCount = useRecoilValue(totalNotificationSelector)
    // const totalNotificationCount = useMemo(() => {
    //   return networkNotificationsCount + jobsNotificationsCount + MessagindNotificationsCount + NotificationsCount
    // }, [networkNotificationsCount , jobsNotificationsCount , MessagindNotificationsCount , NotificationsCount])

  return <div>
    <button>Home</button>

    <button>My Network({networkNotificationsCount >= 100 ? "99+" : networkNotificationsCount})</button>
    <button>Jobs({jobsNotificationsCount})</button>
    <button>Messaging({MessagindNotificationsCount})</button>
    <button>Notifications({NotificationsCount})</button>
    <button>Me ({totalNotificationCount})</button>      
  </div>
} 
export default App;
