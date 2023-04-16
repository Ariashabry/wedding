import React from 'react'
import { useLocation } from 'react-router-dom'
import imageRG from '../image/logo.png'

export default function Opening({ onClick }) {
  const useQuery = () => {
    const { search } = useLocation()
    return React.useMemo(() => new URLSearchParams(search), [search])
  }

  let query = useQuery()
  const namaTamu = query.get('nama')
  const namaPartner = query.get('partner')

  return (
    <section id="opening">
      <div className="jumbotron vertical-center bg-dark m-0">
        <div className="container">
          <div className="row d-flex justify-content-center align-item-center m-0">
            <div className="col-lg-6 col-md-10 col-12">
              <div className="card">
                <div className="card-body text-center py-3">
                  <h2 className="text-center fs25 mb-3">Walimatul 'Urs</h2>
                  <img src={imageRG} className="rumah-gadang pb-4"></img>
                  <h1 className="nama-pengantin rouge pb-4">Ravi & Riri</h1>
                  <p className="fs20 pb-4">Kepada Yth:</p>
                  {namaTamu && (
                    <p className="fs25 nama-tamu pb-4">
                      {namaTamu ?? namaTamu}
                      {namaPartner ? ' & ' + namaPartner : ''}
                    </p>
                  )}

                  <p className="fs18">Di Tempat.</p>
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
  )
}
