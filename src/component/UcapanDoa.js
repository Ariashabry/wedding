import React, { useEffect, useState } from 'react'

export default function UcapanDoa() {
  const [listPesan, setListPesan] = useState([])
  const [loading, setLoading] = useState(true)

  const [ucapan, setUcapan] = useState('')
  const [nama, setNama] = useState('')
  const [konfirmasi, setKonfirmasi] = useState('true')
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [length, setLength] = useState(listPesan ? listPesan.length : 0)

  const fetchListPesan = async () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
    try {
      setLoading(true)
      const response = await fetch(
        `${process.env.REACT_APP_BACKENDAPI}+/api_pesan/pesan`,
        requestOptions,
      )
      const data = await response.json()
      if (data.Code === 200) {
        setListPesan(data.Data)
        setLoading(false)
      } else {
        setLoading(true)
      }
    } catch (e) {
      setLoading(true)
    }
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      let res = await fetch(
        `${process.env.REACT_APP_BACKENDAPI}+/api_pesan/pesan`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nama: nama,
            pesan: ucapan,
            kehadiran: konfirmasi === 'true',
          }),
        },
      )
      if (res.status === 201) {
        setIsError(false)
        setLength(length + 1)
      }
    } catch (error) {
      setIsError(true)
      setErrorMessage(error.message)
    }
  }

  useEffect(() => {
    fetchListPesan()
  }, [length])

  console.log(konfirmasi)

  return (
    <section id="ucapan">
      <div className="container-fluid m-0">
        <div className="row m-0 ">
          <div className="col-12 text-center p-lg-5 p-4 p-md-4 mt-3">
            <div className="card bg-white p-1">
              <div className="card-body">
                <h2 className="rouge fs3m text-coklat">Ucapan & Doa</h2>
                <div className="text-start pt-3">
                  {isError && (
                    <div className="alert alert-danger">
                      {errorMessage ?? errorMessage}
                    </div>
                  )}
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
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="pesan" className="form-label lora">
                        Ucapan dan Doa
                      </label>
                      <textarea
                        className="form-control"
                        id="pesan"
                        rows={5}
                        defaultValue={''}
                        onChange={(e) => setUcapan(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="kehadiran" className="form-label lora">
                        Kehadiran
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        onChange={(e) => setKonfirmasi(e.target.value)}
                      >
                        <option disabled defaultValue={true}>
                          - Konfirmasi Kehadiran -
                        </option>
                        <option value="true">Hadir</option>
                        <option value="false">Tidak</option>
                      </select>
                    </div>
                    <button type="submit" className="btn btn-light my-4 lora">
                      Kirim Ucapan
                    </button>
                  </form>
                </div>
                <hr />
                <div className="content-pesan">
                  {!loading &&
                    listPesan.map((value, index) => (
                      <div className="text-start" key={index}>
                        <div className="nama">
                          <p className="text-dark mb-0 lora">
                            {value.nama}
                            {value.kehadiran ? (
                              <i className="bi bi-check-circle-fill text-success small ms-3"></i>
                            ) : (
                              <i className="bi bi-x-circle-fill text-danger small ms-3"></i>
                            )}
                          </p>
                        </div>
                        <div className="pesan">
                          <p className="lora text-start">
                            <small>{value.pesan}</small>
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
