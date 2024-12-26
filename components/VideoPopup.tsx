"use client";
import { Fragment, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import useClickOutside from "../utility/useClickOutside";

interface VideoPopupProps {
  close: (value: boolean) => void;
  videoID: string | null;
}

const VideoPopup_ = ({ close, videoID }: VideoPopupProps) => {
  const domNode = useClickOutside(() => {
    close(false);
  });
  return (
    <Fragment>
      <div className="mfp-bg mfp-ready" onClick={() => close(false)}></div>
      <div
        className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
        tabIndex={-1}
        style={{ overflow: "hidden auto" }}
      >
        <div className="mfp-container popup-container mfp-s-ready mfp-iframe-holder">
          <div className="mfp-content" ref={domNode}>
            <div className="mfp-iframe-scaler">
              <button
                title="Close (Esc)"
                type="button"
                className="mfp-close"
                onClick={() => close(false)}
              >
                ×
              </button>
              <ReactPlayer url={videoID} playing={true} />
            </div>
          </div>
          <div className="mfp-preloader">Loading...</div>
        </div>
      </div>
    </Fragment>
  );
};

const VideoPopup = () => {
  const [video, setVideo] = useState<boolean>(false);
  const [videoValue, setVideoValue] = useState<string | null>(null);
  useEffect(() => {
    setTimeout(() => {
      const a = document.querySelectorAll<HTMLAnchorElement>("a");
      a.forEach((anchor) => {
        if (
          anchor.href.includes("www.youtube.com") ||
          anchor.href.includes("vimeo.com") ||
          anchor.href.includes("soundcloud.com")
        ) {
          anchor.addEventListener("click", (e) => {
            e.preventDefault();
            setVideoValue(anchor.href);
            setVideo(true);
          });
        }
      });
    }, 1500);
  }, []);
  return (
    <Fragment>
      {video && (
        <VideoPopup_ close={() => setVideo(false)} videoID={videoValue} />
      )}
    </Fragment>
  );
};

export default VideoPopup;