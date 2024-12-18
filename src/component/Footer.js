import React from 'react'

export default function Footer() {
  return (
    <div>
      <section className="text-center py-3" id="fotoakhir">
        <div className="container-fluid pt-5 m-0">
          <div className="row d-flex justify-content-center pt-5 pb-5">
            <div className="col-lg-10 col-11 text-center pt-3 footer-text">
              <h2 className="rouge fs4m">Naufal <br />&<br /> Hikmah</h2>
              <p className="lora fs25 mt-4">See you on our happy day</p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center py-3 bg-black">
        <p className="text-white lora credit">
          ©2024
          <a
            href="https://www.instagram.com/ariashabry/"
            rel="noreferrer"
            className="cc me-2"
          >
            <i className="bi bi-instagram ms-2"></i> Aria Shabry.
          </a>
          All rights reserved.
        </p>
      </section>
    </div>
  )
}
