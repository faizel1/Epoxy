'use client'
import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'


const modalRoot = document.getElementById('modal-root')


const Modal = ({ children }) => {
    return (
        <div className="modal">
            {children}
        </div>
    )
}

const YouTubeVideo = () => {

    const videoRef = useRef(null)

    useEffect(() => {
        // load YouTube API
    }, [videoId])

    return (
        <iframe
            ref={videoRef}
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/DdCQP-TtzKc`}
        />
        // <iframe
        // ref={videoRef}
        //  width="640"
        //   height="360"
        //    src="https://www.youtube.com/embed/DdCQP-TtzKc"
           
            // frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
            // >

        // </iframe>
    )

}

export default function VideoModal( ) {

    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(true)
    }

    return (
        <>
            <button onClick={openModal}>Play Video</button>

            {showModal && createPortal(
                <Modal>
                    <YouTubeVideo />
                </Modal>
                , modalRoot)}
        </>
    )

}
