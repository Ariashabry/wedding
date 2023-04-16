import React from 'react'

export default function Jadwal() {
  return (
    <section id="jadwal">
      <div className="row d-flex justify-content-center px-3 px-lg-5 m-0">
        <div className="col-12 py-5">
          <div className="card bg-light text-dark">
            <div className="card-body py-5">
              <div className="row d-flex justify-content-center">
                <div className="col-12 text-center p-4 p-md-4 p-lg-5">
                  <img
                    width="128"
                    height="128"
                    src="https://tibra-invitation.id/wp-content/uploads/2022/06/wedding-rings-4.png"
                    alt=""
                    loading="lazy"
                    className="filter-black"
                  ></img>
                  <h2 className="rouge fs3m color-pink">Akad Nikah</h2>
                  <p>Jumat, 28 April 2023</p>
                  <p>08.00 - Selesai</p>
                  <p>Mesjid Nur Ilahi</p>
                  <p>
                    Jorong Pincuran Tinggi, Nagari Panyalaian, Kec. X Koto,
                    Tanah Datar
                  </p>
                  <a
                    className="btn button-brown"
                    href="https://goo.gl/maps/QmaFweVaXVCwXw1y7"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-geo-alt-fill me-3"></i>Lihat Lokasi
                  </a>
                </div>
                <div className="col-12 text-center mt-5 pt-3">
                  <img
                    width="128"
                    height="128"
                    src="https://tibra-invitation.id/wp-content/uploads/2022/06/resepsi.png"
                    alt=""
                    loading="lazy"
                    className="filter-black"
                  />
                  <h2 className="rouge fs3m color-pink">Walimatul 'Ursy</h2>
                </div>
                <div className="col-md-6 col-sm-12 col-12 text-center">
                  <div className="card-body mt-lg-5 mt-md-2 mt-1">
                    <h2 className="lora fs2m color-pink">Mempelai Wanita</h2>
                    <p>Sabtu, 29 April 2023</p>
                    <p>10.00 - Selesai</p>
                    <p>Simpang Mesjid Nur Ilahi, Jorong Pincuran Tinggi</p>
                    <p>Nagari Panyalaian, Kec. X Koto, Tanah Datar</p>
                    <a
                      className="btn button-brown mb-4"
                      href="https://goo.gl/maps/QmaFweVaXVCwXw1y7"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-geo-alt-fill me-3"></i>Lihat Lokasi
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 col-12 text-center">
                  <div className="card-body mt-lg-5 mt-md-2 mt-1">
                    <h2 className="lora fs2m color-pink">Mempelai Pria</h2>
                    <p>Minggu, 30 April 2023</p>
                    <p>10.00 - Selesai</p>
                    <p>Kediaman Pria</p>
                    <p>
                      Musholla Katinggian, Jln. Katinggian, Jorong Batang
                      Silasiah, Kec. Candung, Kab. Agam
                    </p>
                    <a
                      className="btn button-brown mb-4"
                      href="https://goo.gl/maps/nUcYjmqaZ5xGEBWv5"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-geo-alt-fill me-3"></i>Lihat Lokasi
                    </a>
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
