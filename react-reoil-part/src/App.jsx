import {useRecoilValue, RecoilRoot} from 'recoil'
import {notificationsAtom, totalNotificationSelector } from "./atom"
import { Suspense } from 'react'

function App() {

  return <>
      <RecoilRoot>
        <Suspense fallback={<div>loading</div>}>
          <Topbar/>
        </Suspense>
      </RecoilRoot>
      </> 
}


function Topbar(){
    const notificationCount = useRecoilValue(notificationsAtom)
    const TotalnotificationCount = useRecoilValue(totalNotificationSelector)

  return <div>
    <button>Home</button>

    <button>My Network({notificationCount.network >= 100 ? "99+" : notificationCount.network})</button>
    <button>Jobs({notificationCount.jobs})</button>
    <button>Messaging({notificationCount.messaging})</button>
    <button>Notifications({notificationCount.notification})</button>
    <button>Me ({TotalnotificationCount})</button>      
  </div>
} 
export default App;
