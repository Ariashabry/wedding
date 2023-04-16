import React from 'react'

export default function Live() {
  return (
    <section id="live">
      <div className="container-fluid pt-5 pb-5 m-0">
        <div className="row d-flex justify-content-center pt-5 pb-5">
          <div className="col-lg-8 col-11">
            <div className="card-body text-center bg-light text-coklat p-lg-5 p-3 rounded-4">
              <h2 className="rouge fs3m text-coklat">Live Streaming</h2>
              <p className="lora fs18">
                Kami mengajak Anda yang tidak bisa hadir langsung untuk
                bergabung pada momen spesial kami melalui siaran langsung secara
                virtual dengan klik tombol berikut:
              </p>
              {/* Button trigger modal */}
              <a
                type="button"
                className="btn btn-outline-danger ms-3 m-2"
                href="https://www.instagram.com/aciak_raffy/"
                target={'_blank'}
                rel="noreferrer"
              >
                <i className="bi bi-instagram me-3"></i> Live Instagram Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
