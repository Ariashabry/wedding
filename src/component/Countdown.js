import React, { useEffect, useState } from 'react'

export default function Countdown() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear()
    const difference = +new Date(`${year}-04-29`) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  })

  const timerComponents = []
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{' '}
      </span>,
    )
  })

  return (
    <section id="countdown">
      <div className="container-fluid pt-5 pb-5 m-0">
        <div className="row d-flex justify-content-center pt-5 pb-5">
          <div className="col-lg-10 col-11">
            <div className="card border-0 bg-transparent">
              {/* <img
                src={
                  'http://1.bp.blogspot.com/_6ajGEGcAlrg/TQd6Cb1lA9I/AAAAAAAAAA0/dMYRoZXUpeU/s1600/PLM+Ged+B3.JPG'
                }
                title="WED13-IM4GE-1.jpg"
                alt="WED13-IM4GE-1.jpg"
                className="rounded-top"
                width={'100%'}
              /> */}
              <div className="card-body putih-kucing text-center p-4 border2">
                <img
                  width="125"
                  src="https://app.sangmempelai.id/webview/template/bg/a86914d828869fb35d932f158e564ad5.png"
                  className=" attachment-large size-large mb-3 my-3"
                  alt=""
                  loading="lazy"
                />
                <h3 className="card-title my-3 rouge fs3m fw-bold color-gold">
                  Menuju Hari Bahagia
                </h3>
                <p className="card-text pt-3 lora pb-5">
                  Siang dan malam berganti begitu cepat, diantara saat-saat
                  mendebarkan yang belum pernah kami rasakan sebelumnya. Kami
                  nantikan kehadiran para keluarga dan sahabat, untuk menjadi
                  saksi ikrar janji suci kami dihari yang bahagia.
                </p>

                <div className="row d-flex justify-content-center">
                  <div className="col-12 col-lg-10 col-sm-10 col-md-8 text-center pt-3">
                    {timerComponents.length ? (
                      <div>
                        <ul className="countdown text-center">
                          <li className="coundown-list">
                            <div className="countdown-item">
                              <span>{timeLeft.days}</span>
                              <span className="label">Hari</span>
                            </div>
                          </li>
                          <li className="coundown-list">
                            <div className="countdown-item">
                              <span>{timeLeft.hours}</span>
                              <span className="label">Jam</span>
                            </div>
                          </li>
                          <li className="coundown-list">
                            <div className="countdown-item">
                              <span>{timeLeft.minutes}</span>
                              <span className="label">Menit</span>
                            </div>
                          </li>
                          <li className="coundown-list">
                            <div className="countdown-item">
                              <span>{timeLeft.seconds}</span>
                              <span className="label">Detik</span>
                            </div>
                          </li>
                        </ul>
                        <a
                          className="btn button-brown mb-3 mt-5"
                          href="https://www.google.com/calendar/render?action=TEMPLATE&text=The%20Wedding%20Of%20Ikhlas%20and%20Dina&details=We%20invite%20to%20join%20our%20celebration%20day.%20Your%20attandence%20to%20our%20wedding%20event%20is%20the%20honour%20for%20us.&dates=20221226T140000/20221226T160000&location=https://goo.gl/maps/BL4Msg8LE1SUorUg6"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="bi bi-calendar-week me-3"></i> Simpan
                          Tanggal
                        </a>
                      </div>
                    ) : (
                      <span></span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
