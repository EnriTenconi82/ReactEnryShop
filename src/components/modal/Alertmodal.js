import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const Alertmodal=({showModal,setShowModal,text})=>{

  
  const modalHandler = () => {
    setShowModal(!showModal)
  }
  
  return (
    <>
    
      <Modal show={showModal}>
        <Modal.Header closeButton onClick={modalHandler}>
          <Modal.Title>Atencíon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {text} 
        </Modal.Body> 
        <Modal.Footer>
          <Button variant="danger" onClick={modalHandler}>
            Close
          </Button>
        </Modal.Footer>
      
      </Modal>
    </>
  )
}
export default Alertmodal