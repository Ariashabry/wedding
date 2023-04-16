import React from 'react'

export default function Gift() {
  return (
    <section id="gift">
      <div className="container-fluid pt-5 pb-5 m-0">
        <div className="row d-flex justify-content-center pt-5 pb-5">
          <div className="col-lg-8 col-11">
            <div className="card-body text-center bg-light text-dark p-lg-5 p-5 rounded-4">
              <h2 className="rouge fs3m color-pink">Wedding Gift</h2>
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
                Wedding Gift
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
                          className="card text-center m-2"
                          style={{ width: '18rem' }}
                        >
                          <div className="card-body">
                            <img
                              width={'100%'}
                              src="https://wakalahmu.com/storage/artikel/PsZQ6EEMMRM25a7AKyB29eTd8Lb7KqPnNFjViFwd.png"
                              alt=""
                              loading="lazy"
                              className=""
                            />
                            <p className="card-text">Riri Widya</p>
                            <hr />
                            <p>7143813775</p>
                          </div>
                        </div>
                        <div
                          className="card text-center m-2"
                          style={{ width: '18rem' }}
                        >
                          <div className="card-body">
                            <img
                              width={'100%'}
                              src={
                                'https://wakalahmu.com/storage/artikel/PsZQ6EEMMRM25a7AKyB29eTd8Lb7KqPnNFjViFwd.png'
                              }
                              alt=""
                              loading="lazy"
                              className=""
                            />
                            <p className="card-text">Ravi Maulana</p>
                            <hr />
                            <p>4080819968</p>
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
