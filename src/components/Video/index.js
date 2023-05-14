import ReactPlayer from "react-player";
import "./styles.scss";

function Video() {
  return (
    <div className="container">
      <div className="player-wrapper">
        <ReactPlayer
          url="https://player.vimeo.com/141995552"
          playing={true}
          controls={true}
          light={
            <img src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/video_image.jpg"></img>
          }
          width="1100px"
          height="100%"
        />
      </div>
    </div>
  );
}

export default Video;
