import React from 'react'
import bank from "../image/bank.png";

export default function Gift() {
  return (
    <section id="gift">
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
                className="btn button-brown ms-3 m-2"
                href="https://www.instagram.com/hikmahsilvira/"
                target={'_blank'}
                rel="noreferrer"
              >
                <i className="bi bi-instagram me-3"></i> Live Instagram Story
              </a>
            </div>
            <div className="card-body text-center bg-light text-dark p-lg-5 p-5 rounded-4 mt-5">
              <h2 className="rouge fs3m color-gold">Dompet Digital</h2>
              <p className="lora">
                Doa restu anda merupakan karunia yang sangat berarti bagi kami.
                dan jika memberi adalah ungkapan tanda terimakasih anda, anda
                dapat memberi kado secara cashless.
              </p>
              {/* Button trigger modal */}
              <button
                type="button"
                className="btn button-brown"
                data-bs-toggle="modal"
                data-bs-target="#giftModal"
              >
                <i className="bi bi-gift-fill me-3"></i>
                Dompet Digital
              </button>
            </div>
            <div>
              {/* Modal */}
              <div
                className="modal fade modal-lg"
                id="giftModal"
                tabIndex={-1}
                aria-labelledby="giftModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="giftModalLabel">
                        Kasih Hadiah
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <div className="row d-flex justify-content-center">
                        <div
                          className="card text-center m-0 p-0 rounded"
                          style={{ width: '18rem' }}
                        >
                          <div className="card-body bank-bg rounded">
                            <img
                              height={'40px'}
                              src={bank}
                              alt=""
                              loading="lazy"
                              className="mb-3"
                            />
                            <p className="card-text fw-bold">Ahmad Naufal</p>
                            <hr />
                            <p>0200.0210.2520-5</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Tutup
                      </button>
                    </div>
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
