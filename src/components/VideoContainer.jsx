import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);

  const fetchVideoData = async () => {
    const res = await fetch(YOUTUBE_API);
    const data = await res.json();
    setVideo(data.items);
  };

  useEffect(() => {
    fetchVideoData();
  }, []);

  if (video?.length == 0) return <ShimmerUi />;

  return (
    <div className=" mt-4 flex flex-wrap justify-center gap-4">
      {video?.map((item) => {
        return (
          <Link to={"/watch?v=" + item.id} key={item.id}>
            <VideoCard name="home" videoInfo={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
