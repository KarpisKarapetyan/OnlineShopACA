import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import favorite from "../../Images/favorite.png"
import FavoriteComponent from './FavoriteWindow/FavoriteComponent';


const style = {
  // position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(640%, 35%)',
  width: 200,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button  onClick={handleOpen}><img className="logoFavorite" src={favorite}></img></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
           <FavoriteComponent />
        </Box>
      </Modal>
    </div>
  );
}
