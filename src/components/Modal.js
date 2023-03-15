import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function AppModal() {
  const [show, setShow] = useState(false); // control state of Modal: show = true

  const handleClose = () => setShow(false); // set show state false to close 
  const handleShow = () => setShow(true); // set show state true to open

  // React bootstrap modal - https://react-bootstrap.github.io/components/modal/
  return (
    <> {/* fragments - group elements without wrapper - https://beta.reactjs.org/reference/react/Fragment*/}
      <Button variant="primary" onClick={handleShow} style={{ margin: "8px" }}>
        Help
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hangman Help</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Choose a letter you think may be in the hidden word. If it's correct, it will display in the hidden word.
            If it isn't in the word then a piece of the hangman image will be drawn. You have 10 guesses to complete
            all the letters in the word before the hangman picture is drawn. Good luck!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AppModal;