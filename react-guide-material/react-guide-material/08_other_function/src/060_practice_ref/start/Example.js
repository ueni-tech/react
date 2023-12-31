import { useState, useRef, forwardRef, useImperativeHandle } from "react";

const Video = forwardRef(({ path }, ref) => {
  const VideoRef = useRef();

  useImperativeHandle(ref, () => ({
    play(){
      VideoRef.current.play();
    },
    stop(){
      VideoRef.current.pause();
    }
  }));

  return (
    <video style={{ maxWidth: "100%" }} ref={VideoRef}>
      <source src={path}></source>
    </video>
  );
});

const Example = () => {
  const [playing, setPlaying] = useState(false);

  const ref = useRef();

  return (
    <div>
      <Video ref={ref} path="./sample.mp4" />
      <button
        onClick={() => {
          if(playing){
            ref.current.stop();
          } else {
            ref.current.play();
          }
          setPlaying((prev)=> !prev);
        }}
      >
        {playing ? "Stop" : "Play"}
      </button>
    </div>
  );
};

export default Example;
