import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



function Example({ onAdd }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)
  const [tittle, setTittle] = useState("")
  const [time, setTime] = useState("")


  const add = (e) => {
    e.preventDefault()
    if (tittle === "" || time ==="") {
      alert("please enter title & time")
      return
    }
    onAdd({ tittle, time })
    setTime('')
    setTittle('')
    setShow(false)


  }


  return (
    <>

      <Button variant="primary" onClick={handleShow} >
        add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={add}>
            <Form.Group className='mb-3'>

              <Form.Label htmlFor='tittle'>Tittle</Form.Label>
              <Form.Control
                type='text'
                placeholder=""
                name='tittle'
                value={tittle}
                onChange={(e) => setTittle(e.target.value )}
              />
              <Form.Label htmlFor='time'>time</Form.Label>
              <Form.Control
                type='datetime-local'
                placeholder=""
                name='time'
                value={time}
                onChange={(e) => setTime(e.target.value )}

              />
 
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button type='sumbit' variant="primary" >
                  Save
                </Button>
              </Modal.Footer>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example
