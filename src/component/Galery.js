import React, { useState, useCallback } from 'react'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { photos } from './photos'

export default function Galery() {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <section id="penganten" className="mb-5">
      <div className="container-fluid m-0">
        <div className="row">
          <div className="col-12 text-center p-5">
            <h2 className="pb-4 fw-bold lora fs3m">Galery Foto</h2>
            <h3 className="fs15 text-translate lora">
              “Datangnya cinta adalah takdir, dia datang tak pernah terduga”
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={photos.map((x) => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title,
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          </div>
        </div>
      </div>
    </section>
  )
}
