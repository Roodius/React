

export function PropExmaple(props){
    function increseCount(){
        props.setCount(props.count + 1)
    }
    return (
        
        <div>
        <button onClick={increseCount}>Increase</button>
        <p>{props.count}</p>
        </div>
    )
}



export default PropExmaple