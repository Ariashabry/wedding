import React from 'react'

export default function Penganten() {
  return (
    <section id="penganten">
      <div className="container p-lg-5 p-3">
        <div className="row">
          <div className="col-12 text-center p-5">
            <img
              width="125"
              src="https://app.sangmempelai.id/webview/template/bg/a86914d828869fb35d932f158e564ad5.png"
              className=" attachment-large size-large mb-3"
              alt=""
              loading="lazy"
            />
            <h2 className="fs2m pb-4 lora fw-bold color-gold">
              Assalamu`alaikum Warahmatullaahi Wabarakaatuh
            </h2>
            <h3 className="fs15 text-translate">
              Maha Suci Allah yang telah menciptakan makhluk-Nya
              berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi
              pernikahan kami:
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 col-12 text-center order-1 container">
           <div className='photo-profile1'></div>
            <div className="card-body p-3">
              <h1 className="rouge fsbig mb-0">Naufal</h1>
              <h2 className="fs20 lora fw-bold mb-2 color-gold">
                Ahmad Naufal, S.Pd
              </h2>
              <a
                href="https://www.instagram.com/naufal2608/"
                target={'_blank'}
                rel="noreferrer"
                className="ig"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <p className="lora mb-1 mt-4">Putra dari : </p>
              <p className="lora">
                Bapak Rusbeni St. Batuah (Alm)
                <br />&<br /> Ibu Harlis
              </p>
            </div>
          </div>
          <div className="col-md-2 col-12 d-flex justify-content-center box-centered order-2">
            <h2 className="fs81">&</h2>
          </div>
          <div className="col-md-5 col-12 text-center order-3">
          <div className='photo-profile2'></div>
            <div className="card-body p-3">
              <h1 className="rouge fsbig mb-0">Hikmah</h1>
              <h2 className="fs20 lora fw-bold mb-2 color-gold">
                Hikmah Silfira, S.Pd
              </h2>
              <a
                href="https://www.instagram.com/hikmahsilvira/"
                target={'_blank'}
                rel="noreferrer"
                className="ig"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <p className="mb-0 lora mt-4">Putri dari: </p>
              <p className="lora">
                Bapak Heril
                <br />& <br /> Ibu Resmiyanti
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
