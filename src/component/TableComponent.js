import React from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider, {
  Search,
} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit'
import paginationFactory from 'react-bootstrap-table2-paginator'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export const TableComponent = (props) => {
  const [copied, setCopied] = React.useState(false)

  const onClick = React.useCallback(({ target: { innerText } }) => {
    console.log(`Clicked on "${innerText}"!`)
  }, [])

  const onCopy = React.useCallback(() => {
    setCopied(true)
  }, [])
  const pesanKirim = (web, tujuan) => {
    return `
    Assalamualaikum wr.wb.
    
    Yth. ${tujuan}
      
    Tanpa mengurangi rasa hormat, dengan memohon rahmat dan ridho Allah, izinkan kami mengundang Bapak/Ibu/ Saudara/i dan teman-teman untuk hadir memberikan doa restu pada acara acara Akad Nikah dan Walimatul 'Urs kami :
    
    Ravi Maulana, S.Si & Riri Widia, S.IQ, S.Ag
    
    Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i dan teman teman berkenan hadir dan memberikan doa restu.
    
    Atas kehadiran dan do'a restunya, kami mengucapkan terima kasih.
    
    Nb:
    E-Invitation ini merupakan undangan resmi dari kami, karena keterbatasan jarak dan waktu, kami mohon maaf dalam menyampaikan undangan ini. Semoga tidak mengurangi makna serta isinya.
    
    Keluarga besar
    Ravi & Riri
    
    Waalaikumsalam wr. wb.
    
    ===========================
    Link Undangan Anda: 
    ${web}`
  }
  function namaUndangan(cell, row) {
    return (
      <span>
        {cell} {row.partner ? ' & ' + row.partner : ''}
      </span>
    )
  }

  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing {from} to {to} of {size} Results
    </span>
  )

  const options = {
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
  }

  const defaultSorted = [
    {
      dataField: 'nama',
      order: 'desc',
    },
  ]

  const { SearchBar } = Search

  const columns = [
    {
      dataField: 'id',
      text: 'No',
      headerStyle: () => {
        return { width: '10%' }
      },
      sort: true,
    },
    {
      dataField: `nama`,
      text: 'Nama Undangan',
      formatter: namaUndangan,
      classes: 'text-capitalize',
      headerStyle: () => {
        return { width: '50%' }
      },
      sort: true,
    },
    {
      dataField: 'link',
      text: 'Action',
      formatter: (cell, row) => {
        return (
          <div>
            <CopyToClipboard
              onCopy={onCopy}
              options={{ message: 'Whoa!' }}
              text={pesanKirim(
                encodeURI(
                  `${process.env.REACT_APP_BACKENDAPI}+/tamu?nama=${row.nama}${
                    row.partner ? '&partner=' + row.partner : ''
                  }`,
                ),
                `${row.nama} ${row.partner ? ' & ' + row.partner : ''}`,
              )}
            >
              <button className="btn btn-sm btn-success ms-2" onClick={onClick}>
                {' '}
                <i className="bi bi-back"></i>{' '}
                <span className="d-none d-md-inline-block">Gunakan</span>
              </button>
            </CopyToClipboard>
            <a
              className="btn btn-warning btn-sm ms-2 text-white"
              href={`/edittamu/${row.id}`}
            >
              <i className="bi bi-pencil"></i>
            </a>
            <button
              className="btn btn-danger btn-sm ms-2"
              onClick={() => props.onClick(row.id)}
            >
              <i className="bi bi-trash"></i>
            </button>
          </div>
        )
      },
    },
  ]

  if (copied) {
    console.log('text-copied')
  }
  return (
    <ToolkitProvider
      keyField="id"
      data={props.data}
      columns={columns}
      search
      bootstrap4
      defaultSorted={defaultSorted}
    >
      {(props) => (
        <div>
          <div className="float-end m-2">
            <SearchBar {...props.searchProps} placeholder="Cari .." />
          </div>

          <BootstrapTable
            striped
            hover
            condensed
            {...props.baseProps}
            pagination={paginationFactory(options)}
          />
        </div>
      )}
    </ToolkitProvider>
  )
}
