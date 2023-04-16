import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Edit() {
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [nama, setNama] = useState('')
  const [loading, setLoading] = useState(true)
  const [partner, setPartner] = useState('')
  const [nomor, setNomor] = useState('')
  const params = useParams()
  let navigate = useNavigate()
  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      let res = await fetch(
        'https://aciakapi.azurewebsites.net/api_undangan/undangan',
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: parseInt(params.identifier),
            nama: nama,
            partner: partner,
            alamat: '',
            nomor: nomor,
          }),
        },
      )
      if (res.status === 200) {
        setIsError(false)
        navigate('/admin')
      }
    } catch (error) {
      setIsError(true)
      setErrorMessage(error.message)
    }
  }
  const fetchListUndangan = async (id) => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
    try {
      setLoading(true)
      const response = await fetch(
        `https://aciakapi.azurewebsites.net/api_undangan/undangan/${id}`,
        requestOptions,
      )
      const data = await response.json()
      if (data.Code === 200) {
        setNama(data.Data.nama)
        setPartner(data.Data.partner)
        setNomor(data.Data.nomor)
        setLoading(false)
      } else {
        setLoading(true)
      }
    } catch (e) {
      setLoading(true)
    }
  }

  useEffect(() => {
    fetchListUndangan(params.identifier)
  }, [params.identifier])

  return (
    <main>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="/admin">
              Admin
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#">
              Home
            </a> */}
              </li>
            </ul>
            {/* <div className="d-flex">
          <button className="btn btn-outline-success">action</button>
        </div> */}
          </div>
        </div>
      </nav>
      <div className="container py-4">
        <header className="pb-3 mb-4 border-bottom">
          <h3 className="d-flex align-items-center text-dark text-decoration-none">
            <span className="fs-4">Edit Data</span>
          </h3>
        </header>
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-2">
            {isError && <div>{errorMessage ?? errorMessage}</div>}
            {loading && <div>Loading data ...</div>}
            <form onSubmit={(e) => submitHandler(e)}>
              <div className="mb-3">
                <label htmlFor="nama" className="form-label lora">
                  Nama
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nama"
                  onChange={(e) => setNama(e.target.value)}
                  value={nama}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="partner" className="form-label lora">
                  Partner
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="partner"
                  onChange={(e) => setPartner(e.target.value)}
                  value={partner}
                />
              </div>
              {/* <div className="mb-3">
                <label htmlFor="wa" className="form-label lora">
                  Nomor WA
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    +62
                  </span>
                  <input
                    type="number"
                    className="form-control"
                    required
                    onChange={(e) => setNomor(e.target.value)}
                    value={nomor}
                  />
                </div>
                <small>
                  masukkan dengan format 82312345678 (tanpa 0 atau tanda baca)
                </small>
              </div> */}
              <button className="btn btn-success btn-sm" type="submit">
                Edit Data
              </button>
              <a className="btn btn-sm btn-outline-dark ms-2" href="/admin">
                Cancel
              </a>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
