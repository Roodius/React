import { renderToPipeableStream } from "react-dom/server";


export function VideoCard(props:any) {

    return <div>
        <img src={props.thumnailImage} className="rounded-xl "/>
        <div className="grid grid-cols-12">

            <div className="col-span-1 pl-6 pt-4">
                <img className="rounded-full" src={props.image} />
            </div>
            <div className="col-span-11  pt-4">
                <div>
                {props.title}
                
            <div className="col-span-11 text-gray-600 text-base">
                {props.author}
            </div>

            
            <div className="col-span-11 text-gray-600 text-base">
                {props.views}M views • {props.timestamp} days ago
            </div>
                </div>
            </div>
        </div>
    </div>
}
