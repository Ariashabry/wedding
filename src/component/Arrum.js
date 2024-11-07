import React from "react";
import penganten from "../image/image2.jpg";

export default function Arrum() {
  return (
    <section id="ar-rum21">
      <div className="container-fluid pt-5 pb-5 m-0">
        <div className="row d-flex justify-content-center pt-5 pb-5">
          <div className="col-lg-8 col-11 mt-5">
            <div className="card-body text-center putih-kucing p-lg-5 p-4 border2">
              <img
                src={penganten}
                className="arrum-foto"
                alt=""
                loading="lazy"
              />
              <br />
              <img
                src="https://app.sangmempelai.id/webview/template/front/img/bismillah.png"
                height={120}
              />
              <p className="text-dark">
                “Dan diantara tanda-tanda kekuasaan-Nya ialah diciptakan-Nya
                untukmu pasangan hidup dari jenismu sendiri supaya kamu mendapat
                ketenangan hati dan dijadikan-Nya kasih sayang diantara kamu.
                Sesungguhnya yang demikian menjadi tanda-tanda kebesaran-Nya
                bagi orang-orang yang berpikir.”
              </p>
              <p className="lora fw-bold color-pink">( Ar-Rum: 21 )</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
