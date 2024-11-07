import './App.css'
import React, { useState, useEffect } from 'react'
import Opening from './component/Opening'
import Header from './component/Header'
import Arrum from './component/Arrum'
import Penganten from './component/Penganten'
import Jadwal from './component/Jadwal'
import Countdown from './component/Countdown'
import UcapanDoa from './component/UcapanDoa'
import Gift from './component/Gift'
import Footer from './component/Footer'
import Foto from './component/Foto'
import music from '../src/talempong.mp3'
import Live from './component/Live'
import Undangan from './component/Undangan'
import Foto2 from './component/Foto2'

const useAudio = (url) => {
  const [audio] = useState(new Audio(music))
  const [playing, setPlaying] = useState(false)

  const toggle = () => setPlaying(!playing)

  useEffect(() => {
    playing ? audio.play() : audio.pause()
  }, [playing, audio])

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false))
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false))
    }
  }, [audio])

  return [playing, toggle]
}

export default function App({ url }) {
  const [open, setOpen] = useState(true)
  const [playing, toggle] = useAudio(url)

  const openHandle = () => {
    setOpen(false)
    toggle()
  }

  return (
    <main>
      <div className="audio-button">
        <button
          onClick={toggle}
          className="btn  btn-lg btn-transparent text-white"
        >
          {playing ? (
            <i className="bi bi-pause-circle-fill fs2m"></i>
          ) : (
            <i className="bi bi-play-circle-fill fs2m"></i>
          )}
        </button>
      </div>
      {open ? (
        <Opening onClick={() => openHandle()} />
      ) : (
        <div>
          <Header />
          <Arrum />
          <Penganten />
          <Foto />
          <Countdown />
          <Jadwal />
          <Undangan />
          {/* <Live /> */}
          {/* <UcapanDoa /> */}
          {/* <Foto2 /> */}
          <Gift />
          <Footer />
        </div>
      )}
    </main>
  )
}
