import React from 'react';
import { Box, Modal } from '@mui/material';
import "./style.scss";

const Basket = ({ open, handleClose }) => {
  const style = {
    minHeight: "90vh",
    backgroundColor: "#fff",
    margin: "auto",
  };

  return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box className="modal-content" sx={{ ...style, width: 600 }}>
                <h2 id="parent-modal-title">Text in a modal</h2>
                <p id="parent-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </p>
            </Box>
        </Modal>
  )
}

export default Basket;
