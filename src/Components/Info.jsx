import React from 'react'

const mail = "timo.dziallas1@gmail.com"

export default function Info() {
  return (
    <div className="info">
        <div className="container">
           <div className="about">
            <h3>Timo Dziallas</h3>
            <p>Filmmaker at <a href="https://www.goodwillfilm.dk/" target='_blank'>GoodwillFilm</a></p>
            <p>Editor & Foreman at <a href="https://www.18frames.dk/" target='_blank'>18Frames</a></p>
           </div>
           <div className="contact">
              <a href="https://www.youtube.com/@timodziallas4374/videos" target='_blank'>My Work</a>
              <p onClick={() => {navigator.clipboard.writeText(mail);}}>{mail}</p>
           </div>
        </div>
    </div>
  )
}
