
/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useRef, useState } from 'react'

import { Reveal, Tween } from 'react-gsap';

function VideoPlayer({ videoRef, videoIndex, handlePlayVideo,videoNumber }:any) {
  const videoSource = `/gallery/videos/video${videoNumber}.MP4`;


  return (
    <div>
      <video ref={videoRef} autoPlay muted className='mb-10 w-full' onClick={() => handlePlayVideo(videoIndex)}>
        <source src={videoSource} type="video/mp4" />
      </video>
    </div>
  );
}

const Gallery = () => {

  const handlePlayVideo = (videoIndex:any) => {
    const videoRef = videoIndex === 1 ? vidRef1 : vidRef2;
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const FadeInLeft = ({ children }: any) => {
    return (
      <Tween from={{ x: '-500', opacity: 0 }} to={{ x: '0', opacity: 1 }}>
        {children}
      </Tween>
    )
  }

  const FadeInRight = ({ children }: any) => {
    return (
      <Tween from={{ x: '500', opacity: 0 }} to={{ x: '0', opacity: 1 }}>
        {children}
      </Tween>
    )
  }

  const [isPlaying, setIsPlaying] = useState(false);


  const vidRef1 = useRef<HTMLVideoElement>(null);
  const vidRef2 = useRef<HTMLVideoElement>(null);
  const vidRef3 = useRef<HTMLVideoElement>(null);
  const vidRef4 = useRef<HTMLVideoElement>(null);
  const vidRef5 = useRef<HTMLVideoElement>(null);
  const vidRef6 = useRef<HTMLVideoElement>(null);

  // const handlePlayVideo = (number: Number) => {

  //   if (number == 1) {

  //     vidRef?.current?.play();
  //   }
  //   if (number == 2) {

  //     vidRef2?.current?.play();
  //   }
  //   if (number == 3) {

  //     vidRef3?.current?.play();
  //   }
  //   if (number == 4) {
  //     vidRef4?.current?.play();
  //   }
  //   if (number == 5) {
  //     vidRef5?.current?.play();
  //   }
  //   if (number == 6) {
  //     vidRef6?.current?.play();

  //   }
  // }
  return (

    <div className="max-w-[100%] overflow-hidden ">


      <div className="hero hero.align-items-left h-[300px] md:h-[400px] flex items-center justify-center " style={{ backgroundImage: 'url(/img/abtHero.png)' }}>
        <div className="  text-[#292F36] text-center flex items-end justify-center flex-1 h-full">
          <div className="bg-white py-5 px-20 rounded-t-2xl">

            <h1 className='text-2xl lg:text-5xl font-bold' >Gallery Us</h1>
            <h3 className='text-md lg:text-xl font-extralight' >Home / Gallery</h3>
          </div>
        </div>
      </div>

      <div className="masonary-container px-5 md:px-10 lg:px-44 py-5 md:py-20 ">

        {/* 1 */}
        <div className="image-container ">
          <Reveal repeat trigger={<div />}>
            <FadeInLeft>
            <VideoPlayer videoRef={vidRef1} videoIndex={1} handlePlayVideo={handlePlayVideo}         videoNumber={1}
 />

              {/* <video ref={vidRef1} autoPlay onClick={() => handlePlayVideo(1)} className='mb-10 w-full '>
                <source src="/gallery/videos/video5.MP4" type="video/mp4" />
              </video> */}

              {/* <img src="/gallery/flooring/01.png" alt="" />
              <p className="mb-3">Epoxy Flooring</p> */}
            </FadeInLeft>
          </Reveal>

          {/* 2 */}

          <Reveal repeat trigger={<div />}>
            <FadeInLeft>

              <img src="/gallery/flooring/04.png" alt="" />
              <p className="mb-3">Epoxy Flooring 2</p>


            </FadeInLeft>
          </Reveal>
          {/* 3 */}


          <Reveal repeat trigger={<div />}>
            <FadeInLeft>
              {/* <video ref={vidRef2} autoPlay onClick={() => handlePlayVideo(2)} className='mb-10  w-full' >
                <source src="/gallery/videos/video5.MP4" type="video/mp4" />
              </video> */}

<VideoPlayer videoRef={vidRef2} videoIndex={2} handlePlayVideo={handlePlayVideo} videoNumber={2}/>


              {/* <img src="/gallery/flooring/08.png" alt="" />
              <p className="mb-3">Epoxy Flooring 3</p> */}

            </FadeInLeft>
          </Reveal>
          {/* 4 */}


          <Reveal repeat trigger={<div />}>
            <FadeInLeft>

              <img src="/gallery/flooring/02.png" alt="" />
              <p className="mb-3">Epoxy Flooring 4</p>

            </FadeInLeft>
          </Reveal>

          {/* 5 */}


          <Reveal repeat trigger={<div />}>
            <FadeInRight>

              {/* <img src="/gallery/flooring/02.png" alt="" />
              <p className="mb-3">Epoxy Flooring 5</p> */}

              {/* <video ref={vidRef6} autoPlay onClick={() => handlePlayVideo(6)} className=' w-full mb-10' >
                <source src="/gallery/videos/video6.MP4" type="video/mp4" />
              </video> */}

<VideoPlayer videoRef={vidRef3} videoIndex={3} handlePlayVideo={handlePlayVideo}  videoNumber={5}/>


            </FadeInRight>
          </Reveal>

          {/* 6 */}


          <Reveal repeat trigger={<div />}>
            <FadeInRight>
              {/* <video ref={vidRef3} autoPlay onClick={() => handlePlayVideo(3)} className=' w-full mb-10' >
                <source src="/gallery/videos/video7.MP4" type="video/mp4" />
              </video> */}
                          <VideoPlayer videoRef={vidRef4} videoIndex={4} handlePlayVideo={handlePlayVideo} videoNumber={3} />

              {/* <img src="/gallery/flooring/03.png" alt="" />
              <p className="mb-3">Epoxy Flooring</p> */}

            </FadeInRight>
          </Reveal>

          {/* 7 */}


          <Reveal repeat trigger={<div />}>
            <FadeInRight>

              <img src="/gallery/flooring/07.png" alt="" />
              <p className="mb-3">Epoxy Flooring</p>

            </FadeInRight>
          </Reveal>

          {/* 8 */}


          <Reveal repeat trigger={<div />}>
            <FadeInRight>

              {/* <img src="/gallery/flooring/05.png" alt="" />
              <p className="mb-0">Minimal Bedroom table</p> */}

<VideoPlayer videoRef={vidRef5} videoIndex={5} handlePlayVideo={handlePlayVideo} videoNumber={4} />


            </FadeInRight>
          </Reveal>

        </div>

      </div>

    </div>


  )
}

export default Gallery