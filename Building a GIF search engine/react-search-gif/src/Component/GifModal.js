import React from 'react'
import Modal from 'react-modal'

const GifModal = (props) => {
    return(
        <Modal  isOpen = {props.modalIsopen}
        onRequestClose = {() => props.onRequestClose() }>
          <div>
              <img src=' props.selectedGif.images.original.url'/>
              <p><strong>Source:</strong> <a href={props.selectedGif.source }></a></p>
              <p><strong>Rating:</strong>{props.selectedGif.rating}</p>
              <button onClick={() => props.onRequestClose()}> close</button>

          </div>
        </Modal>
    )
}

export default GifModal;