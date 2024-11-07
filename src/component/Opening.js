import React from "react";
import { useLocation } from "react-router-dom";
import imageRG from "../image/logo.png";

export default function Opening({ onClick }) {
  const useQuery = () => {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  };

  let query = useQuery();
  const namaTamu = query.get("nama");
  const namaPartner = query.get("partner");

  return (
    <section id="opening">
      <div className="jumbotron vertical-center m-0 bg-opening">
        <div className="container">
          <div className="row d-flex justify-content-center align-item-center m-0">
            <div className="col-lg-6 col-md-10 col-12">
              <div className="card bg-dark-brown">
                <div className="card-body text-center py-3">
                  <img src={'https://tibra-invitation.id/wp-content/uploads/2024/07/ASSET-MINANG-16-new-1024x629.png'} className="rumah-gadang pb-4 pt-5"></img>
                  <h2 className="text-center fs18 mb-3 text-white">The Wedding Of</h2>
                  <h1 className="nama-pengantin fs36 rouge pb-4">
                    Naufal & Hikmah
                  </h1>
                  <p className="fs18 pt-4 mb-1 text-white">Kepada Yth:</p>
                  {namaTamu && (
                    <p className="fs20 nama-tamu mb-1 text-white">
                      {namaTamu ?? namaTamu}
                      {namaPartner ? " & " + namaPartner : ""}
                    </p>
                  )}

                  <p className="fs18 text-white">Di Tempat.</p>
                  <button className="button-open mt-3 mb-3" onClick={onClick}>
                    <i className="bi bi-envelope-open-fill me-3"></i>Buka
                    Undangan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
