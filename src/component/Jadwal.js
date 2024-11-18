import React from "react";

export default function Jadwal() {
  return (
    <section id="jadwal">
      <div className="row d-flex justify-content-center p-2 m-0">
        <div className="col-12 py-5">
          <div className="card card-coklat text-dark">
            <div className="card-body pt-5 pb-2">
              <div className="row d-flex justify-content-center p-3">
                <div className="text-center">
                  <img
                    src={
                      "https://tibra-invitation.id/wp-content/uploads/2024/07/ASSET-MINANG-16-new-1024x629.png"
                    }
                    className="rumah-gadang pb-4 pt-5"
                  ></img>
                  <h2 className="text-center fs30 mb-3 text-white">
                    Wedding Event
                  </h2>
                  <p className="text-white">
                    Dengan mengucap puji dan syukur kepada Allah SWT, kami
                    bermaksud mengundang Anda untuk dapat menghadiri acara
                    pernikahan kami yang akan dilaksanakan pada:
                  </p>
                </div>
                <div className="card-body background-card my-3 rounded">
                  <div className="col-12 text-center p-4 p-md-4 p-lg-5">
                    <img
                      width="128"
                      height="128"
                      src="https://tibra-invitation.id/wp-content/uploads/2022/06/wedding-rings-4.png"
                      alt=""
                      loading="lazy"
                      className="filter-black mt-5"
                    ></img>
                    <h2 className="rouge fs3m color-gold mt-3 mb-3">Akad</h2>
                    <hr />
                    <p className="fs20 fw-bold">MINGGU</p>
                    <p className="fs20 fw-bold">10 November 2024</p>
                    <p className="fs20 fw-bold">08.00 - 10.00</p>
                    <hr />
                    <p className="fs25"><b>Mesjid Muslimin</b></p>
                    <p className="fs20">
                      Puhun, Pintu Kabun
                      Bukittinggi
                    </p>
                    <a
                      className="btn button-brown my-5"
                      href="https://maps.app.goo.gl/7WQmSZRELCc8US9Z8?g_st=ac"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-geo-alt-fill me-3"></i>Lihat Lokasi
                    </a>
                    <hr className="pt-5 py-5" />
                  </div>
                </div>
                <div className="card-body background-card mt-5">
                  <div className="col-12 text-center mt-5 pt-3 pb-0">
                    <img
                      width="128"
                      height="128"
                      src="https://tibra-invitation.id/wp-content/uploads/2022/06/resepsi.png"
                      alt=""
                      loading="lazy"
                      className="filter-black"
                    />
                    <h2 className="rouge fs3m color-gold">Resepsi</h2>
                  </div>
                  <div className="col-md-6 col-sm-12 col-12 text-center">
                    <div className="card-body">
                    <h2 className="rouge fs3m color-gold mb-3">Mempelai Pria</h2>
                    <hr />
                    <p className="fs20 fw-bold">SABTU</p>
                    <p className="fs20 fw-bold">16 November 2024</p>
                    <p className="fs20 fw-bold">11.00 - Selesai</p>
                    <hr />
                    <p className="fs25"><b>Rumah Mempelai Pria</b></p>
                    <p className="fs20">
                      Jorong Sungai Landai, Banuhampu, Agam
                    </p>
                    <a
                      className="btn button-brown my-5"
                      href="https://goo.gl/maps/61NzC6va4Z7DZV148?g_st=ac"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-geo-alt-fill me-3"></i>Lihat Lokasi
                    </a>
                    <hr className="pt-5" />
                    </div>
                  </div>
                </div>
                <br/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
