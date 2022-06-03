import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DoneAll from '@mui/icons-material/DoneAll';
import Modal from '@mui/material/Modal';
import DeleteSweep from '@mui/icons-material/DeleteSweep';
import DoNotTouch from '@mui/icons-material/DoNotTouch';
import axios from 'axios'
import {mainUrl} from '../../../api/api'
import './deleteAll.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

 function DELETEALL() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}><DeleteSweep/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <span className='deleteQuation'>
            Are you sure you want clear all?
          </span>
          <div className='doneDeleteAll'>
              <Button onClick={()=> axios.delete(`${mainUrl}/allProducts`)}> <DoneAll/> </Button>
              <Button onClick={handleClose}> <DoNotTouch/> </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
export default DELETEALL