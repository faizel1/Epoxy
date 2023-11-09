// src/components/VideoPopup.js
import React, { useState } from "react";

function VideoPopup({ videoSource, onClose }) {
  return (
    <div className=" max-w-[90%] fixed inset-0 flex mx-auto items-center justify-center z-50">
      <div className="relative bg-black rounded-lg shadow-md p-4 max-w-lg">
        <button
          className="absolute top-2 right-2 text-white text-2xl cursor-pointer"
          onClick={onClose}
        >
          &times;
        </button>
        <video controls className="w-[90%] h-full  min-h-[300px]  flex mx-auto">
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default VideoPopup;
