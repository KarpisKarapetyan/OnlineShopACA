import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import basketLogo from "../../../Images/BasketLogo1.png"
import BasketComponent from '../BasketCompoent/BasketComponent';


const style = {
  position: 'absolute',
  top: 90,
  right: 100,
  width: 250,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p:1,
  borderRadius : 5
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}> <img className="logoBasket" src={basketLogo}></img></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
          <Typography>

          </Typography>
          </div>
          
           <Typography id="modal-modal-title" variant="h6" component="h2">
              <BasketComponent/>
           </Typography>
          
        </Box>
      </Modal>
    </div>
  );
}
