import { charAtom } from './store/count'
import {useRecoilValue,useRecoilState} from "recoil"


export default function CharCount(){
    const [count, setCount] = useRecoilState(charAtom)
    
  return <>
    <input type="text"/>
    <p>{count}</p>
  </>
}

function RenderCount(){
    const [count, setCount] = useRecoilState(charAtom)
    return <>
        {count}
    </>
}

