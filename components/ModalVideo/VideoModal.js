
import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'


const VideoModal = () => {
  
  const [isOpen, setOpen] = useState(false)

  return (
    <React.Fragment>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="OhGJGUKh21E" onClose={() => setOpen(false)} />

      <div className="video-btn">
        <ul>
          <li>
            <button className="btn-wrap" onClick={() => setOpen(true)}><i className="fi flaticon-play-button" aria-hidden="true"></i>Vidéo</button>
          </li>
        </ul>
      </div>

    </React.Fragment>
  )
}

export default VideoModal;