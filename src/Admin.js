import React, { useEffect, useState } from 'react'
import { TableComponent } from './component/TableComponent'

export default function Admin() {
  const [nama, setNama] = useState('')
  const [loading, setLoading] = useState(true)
  const [partner, setPartner] = useState('')
  const [nomor, setNomor] = useState('')
  const [listUndangan, setListUndangan] = useState([])
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [length, setLength] = useState(listUndangan ? listUndangan.length : 0)
  const [isOpen, setIsOpen] = useState(false)

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      let res = await fetch(
        'https://aciakapi.azurewebsites.net/api_undangan/undangan',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nama: nama,
            partner: partner,
            alamat: '',
            nomor: nomor,
          }),
        },
      )
      if (res.status === 201) {
        setIsError(false)
        setLength(length + 1)
        setIsOpen(false)
        setNama('')
        setNomor('')
        setPartner('')
      }
    } catch (error) {
      setIsError(true)
      setErrorMessage(error.message)
    }
  }
  const fetchListUndangan = async () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
    try {
      setLoading(true)
      const response = await fetch(
        'https://aciakapi.azurewebsites.net/api_undangan/undangan',
        requestOptions,
      )
      const data = await response.json()
      if (data.Code === 200) {
        setListUndangan(data.Data)
        setLoading(false)
      } else {
        setLoading(true)
      }
    } catch (e) {
      setLoading(true)
    }
  }

  const deleteHandle = async (id) => {
    try {
      let res = await fetch(
        `https://aciakapi.azurewebsites.net/api_undangan/undangan/${id}`,
        {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        },
      )
      if (res.status === 200) {
        setIsError(false)
        setLength(length - 1)
        console.log('success')
      }
    } catch (error) {
      console.log(error)
    }
  }

  let pesan = `
Assalamualaikum wr.wb.
  
Tanpa mengurangi rasa hormat, dengan memohon rahmat dan ridho Allah, izinkan kami mengundang Bapak/Ibu/ Saudara/i dan teman-teman untuk hadir memberikan doa restu pada acara Akad Nikah dan Walimatul 'Urs kami :

Ravi Maulana, S.Si & Riri Widia, S.IQ, S.Ag

Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i dan teman teman berkenan hadir dan memberikan doa restu.

Atas kehadiran dan do'a restunya, kami mengucapkan terima kasih.

Nb:
E-Invitation ini merupakan undangan resmi dari kami, karena keterbatasan jarak dan waktu, kami mohon maaf dalam menyampaikan undangan ini. Semoga tidak mengurangi makna serta isinya.

Keluarga besar
Ravi dan Riri

Waalaikumsalam wr. wb.

===========================
Link Undangan Anda: https://wedding-ravi-riri.azurewebsites.net/`

  useEffect(() => {
    fetchListUndangan()
  }, [length])

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
        {!isOpen && (
          <button
            className="btn btn-sm btn-outline-dark"
            onClick={() => setIsOpen(true)}
          >
            Tambahkan Tamu
          </button>
        )}
        {isOpen && (
          <div>
            <header className="pb-3 mb-2 border-bottom">
              <h3 className="d-flex align-items-center text-dark text-decoration-non mb-0">
                <span className="fs-4">Tambahkan Tamu</span>
              </h3>
            </header>
            <div className="row">
              <div className="col-12 col-md-8">
                <div className="p-2 mb-4 bg-light rounded-3">
                  <div className="container-fluid py-2">
                    {isError && <div>{errorMessage ?? errorMessage}</div>}
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
                            onChange={(e) => setNomor(e.target.value)}
                            value={nomor}
                          />
                        </div>
                        <small>
                          Masukkan dengan format 82312345678 (tanpa 0 atau tanda
                          baca)
                        </small>
                        <br />
                        <small>
                          <span className="text-danger">*Kosongkan</span> jika
                          tidak ada
                        </small>
                      </div> */}
                      <button className="btn btn-success btn-sm" type="submit">
                        Tambahkan Undangan
                      </button>
                      <button
                        className="btn btn-sm btn-dark ms-2"
                        onClick={() => setIsOpen(false)}
                      >
                        Batal
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="row align-items-md-stretch">
          {!true && (
            <div className="col-md-12 p-2">
              <div className="p-5 bg-light border rounded-3">
                <h4>Format Undangan WA</h4>
                <div className="form-floating">
                  <textarea
                    className="form-control text-start"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    disabled={true}
                    style={{ height: '200px' }}
                    defaultValue={pesan}
                  />
                  <button className="btn btn-warning my-2">Ubah pesan</button>
                </div>
              </div>
            </div>
          )}

          <div className="col-md-12 p-1">
            <div className="h-100 p-md-5 p-1 bg-light border rounded-3">
              <h4 className="mb-4">List Tamu</h4>
              {!loading && (
                <TableComponent data={listUndangan} onClick={deleteHandle} />
              )}
            </div>
          </div>
        </div>
        <footer className="pt-3 mt-4 text-muted border-top">© 2022</footer>
      </div>
    </main>
  )
}
