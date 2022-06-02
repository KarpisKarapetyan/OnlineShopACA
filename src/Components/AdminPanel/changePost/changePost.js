import * as React from 'react';
import Box from '@mui/material/Box';
import axios from "axios"
import { useForm } from 'react-hook-form';
import { mainUrl } from '../../../api/api';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 2,
  p: 4,
};

 function changePost({id,open,setOpen,onClose}) {
    console.log(id)
  const {register,handleSubmit,formState: { errors },} = useForm();
  const handleOpen = () => setOpen(true);
  

  const onSubmit = (data) => {
      const name = [data.name]
    axios.patch(`${mainUrl}/allProducts/${id}`, {
        name : name,
        price : data.price ,
        size : data.size,
        location :data.location
        
    })
    onClose()
  };

  return (
    <div>
        <EditIcon className="changeStateButton"   onClick={handleOpen}/>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div>
        <form className="inputsForm" onSubmit={handleSubmit(onSubmit)} >
          <div className="inputsDiv">
          <label>
              Name
              <input
                {...register("name")}
                type="text"
                placeholder="Select clothes name"
              />
              
            </label>
            <label>
              Price
              <input
                {...register("price")}
                type="number"
                placeholder="Select price"
              />
            </label>
            <label>
              Size
              <input
                {...register("size")}
                type="text"
                placeholder="Select size"
              />
            </label>
            <label>
              Image Link
              <input
                {...register("location", )}
                type="text"
                placeholder="Select image link"
              />
            </label>
            
            <button className="regSubmit" type="submit">Edit</button>
          </div>
        </form>
      </div>
        </Box>
      </Modal>
    </div>
  );
}
export default changePost