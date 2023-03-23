import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const VideoModal = ({ videoLink, videoText }: any) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        //@ts-ignore
        // autoplay
        controls="0"
        showinfo="0"
        isOpen={isOpen}
        videoId={videoLink}
        // url={videoLink}
        onClose={() => setOpen(false)}
      />

      <div className="video-btn">
        <ul>
          <li>
            <button className="btn-wrap" onClick={() => setOpen(true)}>
              <i className="fi flaticon-play-button" aria-hidden="true"></i>
              {videoText}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default VideoModal;
