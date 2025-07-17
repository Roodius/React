import { Appbar } from "@/component/Appbar";
import { VideoCard } from "@/component/VideoCard";
import { VideoGrid } from "@/component/VideoGrid";

export default function Home() {
  return (
    <div> 
      <Appbar/>
      <VideoGrid/>  
    </div>
  );
}
