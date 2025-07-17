import { devIndicatorServerState } from "next/dist/server/dev/dev-indicator-server-state"
import { VideoCard } from "./VideoCard"


const Videos = [{
        image :"/logo.jpg",
        timestamp: 13,
        views:47,
        author:"Roodius", 
        title:"Strangers Thing Final ShowDown",
        thumnailImage : "/image.png"
},{
        image :"/logo.jpg",
        timestamp: 13,
        views:47,
        author:"MOMO", 
        title:"Learn English In Few days",
        thumnailImage : "/image.png"
},{
        image :"/logo.jpg",
        timestamp: 13,
        views:47,
        author:"MOMO", 
        title:"Learn fight In Few days",
        thumnailImage : "/image.png"
},{
        image :"/logo.jpg",
        timestamp: 13,
        views:47,
        author:"MOMO", 
        title:"Learn Spanish In Few days",
        thumnailImage : "/image.png"
},{
        image :"/logo.jpg",
        timestamp: 13,
        views:47,
        author:"MOMO", 
        title:"Learn hand Signs In Few days",
        thumnailImage : "/image.png"
}
]

export const VideoGrid = () => {

    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {Videos.map((video) => <div>
            <VideoCard  image={video.image} timestamp={video.timestamp} views={video.views} author={video.author} title={video.title} thumnailImage=
      {video.thumnailImage}></VideoCard>
        </div>)}
    </div>
}