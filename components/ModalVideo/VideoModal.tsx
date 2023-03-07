import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const VideoModal = ({ videoLink }: any) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        //@ts-ignore
        autoplay
        isOpen={isOpen}
        videoId={videoLink}
        onClose={() => setOpen(false)}
      />

      <div className="video-btn">
        <ul>
          <li>
            <button className="btn-wrap" onClick={() => setOpen(true)}>
              <i className="fi flaticon-play-button" aria-hidden="true"></i>
              Vidéo
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default VideoModal;
