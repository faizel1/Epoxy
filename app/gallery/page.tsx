
/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useRef, useState } from 'react'

import { Reveal, Tween } from 'react-gsap';

function VideoPlayer({ videoRef, videoIndex, handlePlayVideo, videoNumber }: any) {
  let ext="MP4";
  if(videoNumber>6){
    ext="mp4"
  }
  const videoSource = `/gallery/videos/video${videoNumber}.${ext}`;


  return (
    <div >

 
      <video ref={videoRef} controls  playsInline webkit-playsInline preload="auto" autoPlay muted className='mb-10 w-full' onClick={() => handlePlayVideo(videoIndex)}>
        <source src={videoSource} type="video/mp4"  />
      </video>
    </div>

  );
}

const Gallery = () => {

  const handlePlayVideo = (videoIndex: any) => {
    // const videoRef = videoIndex === 1 ? vidRef1 : vidRef2;
    const videoRef = videoIndex;
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
      <Tween from={{ x: '-200',  }} to={{x:0}}>
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
  // const vidRef3 = useRef<HTMLVideoElement>(null);
  const vidRef4 = useRef<HTMLVideoElement>(null);
  const vidRef5 = useRef<HTMLVideoElement>(null);
  const vidRef6 = useRef<HTMLVideoElement>(null);
  const vidRef7 = useRef<HTMLVideoElement>(null);
  const vidRef8 = useRef<HTMLVideoElement>(null);
  const vidRef9 = useRef<HTMLVideoElement>(null);
  const vidRef10 = useRef<HTMLVideoElement>(null);
  const vidRef11 = useRef<HTMLVideoElement>(null);
  const vidRef12 = useRef<HTMLVideoElement>(null);
   const vidRef13 = useRef<HTMLVideoElement>(null);
  const vidRef14 = useRef<HTMLVideoElement>(null);
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
              <VideoPlayer videoRef={vidRef1} videoIndex={1} handlePlayVideo={handlePlayVideo} videoNumber={1}
              />

            </FadeInLeft>
          </Reveal>

          {/* 2 */}

          <Reveal repeat trigger={<div />}>
            <FadeInLeft>

              <img src="/gallery/flooring/04.png" alt="" />
              <p className="mb-3">Epoxy Flooring 2</p>


            </FadeInLeft>
          </Reveal>


{/* 10 */}
<Reveal repeat trigger={<div />}>
            <FadeInRight>


              <VideoPlayer videoRef={vidRef8} videoIndex={8} handlePlayVideo={handlePlayVideo} videoNumber={8} />


            </FadeInRight>
          </Reveal>
   
             {/* 3 */}

             <Reveal repeat trigger={<div />}>
            <FadeInLeft>

              <VideoPlayer videoRef={vidRef2} videoIndex={2} handlePlayVideo={handlePlayVideo} videoNumber={2} />

            </FadeInLeft>
          </Reveal>
          {/* 8 */}


          <Reveal repeat trigger={<div />}>
            <FadeInRight>


              <VideoPlayer videoRef={vidRef5} videoIndex={5} handlePlayVideo={handlePlayVideo} videoNumber={5} />


            </FadeInRight>
          </Reveal>
{/* 9 */}
<Reveal repeat trigger={<div />}>
            <FadeInRight>


              <VideoPlayer videoRef={vidRef7} videoIndex={7} handlePlayVideo={handlePlayVideo} videoNumber={7} />


            </FadeInRight>
          </Reveal>

          {/* 6 */}



          {/* 11 */}
          <Reveal repeat trigger={<div />}>
            <FadeInRight>


              <VideoPlayer videoRef={vidRef9} videoIndex={9} handlePlayVideo={handlePlayVideo} videoNumber={9} />


            </FadeInRight>
          </Reveal>
          <Reveal repeat trigger={<div />}>
            <FadeInRight>

              <VideoPlayer videoRef={vidRef4} videoIndex={4} handlePlayVideo={handlePlayVideo} videoNumber={4} />


            </FadeInRight>
          </Reveal>

          {/* 12 */}
          <Reveal repeat trigger={<div />}>
            <FadeInRight>


              <VideoPlayer videoRef={vidRef10} videoIndex={10} handlePlayVideo={handlePlayVideo} videoNumber={10} />


            </FadeInRight>
          </Reveal>


          {/* 5 */}
   

          {/* <Reveal repeat trigger={<div />}>
            <FadeInRight>


              <VideoPlayer videoRef={vidRef3} videoIndex={3} handlePlayVideo={handlePlayVideo} videoNumber={3} />


            </FadeInRight>
          </Reveal> */}



          {/* 13 */}
          <Reveal repeat trigger={<div />}>
            <FadeInRight>


              <VideoPlayer videoRef={vidRef11} videoIndex={11} handlePlayVideo={handlePlayVideo} videoNumber={11} />


            </FadeInRight>
          </Reveal>
                 {/* 7 */}


                 <Reveal repeat trigger={<div />}>
            <FadeInRight>

              <img src="/gallery/flooring/07.png" alt="" />
              <p className="mb-3">Epoxy Flooring</p>

            </FadeInRight>
          </Reveal>

          {/* 14 */}
          <Reveal repeat trigger={<div />}>
            <FadeInRight>


              <VideoPlayer videoRef={vidRef12} videoIndex={12} handlePlayVideo={handlePlayVideo} videoNumber={12} />


            </FadeInRight>
          </Reveal>
                    {/* 17 */}
                    <Reveal repeat trigger={<div />}>
            <FadeInRight>


              <VideoPlayer videoRef={vidRef6} videoIndex={6} handlePlayVideo={handlePlayVideo} videoNumber={6} />


            </FadeInRight>
          </Reveal>
          {/* 4 */}


          <Reveal repeat trigger={<div />}>
            <FadeInRight>

              <img src="/gallery/flooring/02.png" alt="" />
              <p className="mb-3">Epoxy Flooring 4</p>

            </FadeInRight>
          </Reveal>

          {/* 15 */}
          <Reveal repeat trigger={<div />}>
            <FadeInRight>


              <VideoPlayer videoRef={vidRef13} videoIndex={13} handlePlayVideo={handlePlayVideo} videoNumber={13} />


            </FadeInRight>
          </Reveal>
          {/* 16 */}
          <Reveal repeat trigger={<div />}>
            <FadeInRight>


              <VideoPlayer videoRef={vidRef14} videoIndex={14} handlePlayVideo={handlePlayVideo} videoNumber={14} />


            </FadeInRight>
          </Reveal>



        </div>

      </div>

 

    </div>


  )
}

export default Gallery