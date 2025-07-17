import { VideoCard } from "@/component/VideoCard";

export default function Home() {
  return (
    <div> 
      <VideoCard image={"/logo.jpg"} timestamp={13} views={47} author={"Roodius"} title={"Strangers Thing Final ShowDown"} thumnailImage=
      {"/image.png"}></VideoCard>
    </div>
  );
}
