import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from "axios"
import { useForm } from 'react-hook-form';
import { mainUrl } from '../../../api/api';
import {adminProductSelector , setAdminProduct} from '../../../redux/slices/adminProducts'
import AddBoxIcon from '@mui/icons-material/AddBox';
import {useDispatch ,useSelector} from 'react-redux'

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

 function addProduct({open , setOpen , onClose}) {
  const {register,handleSubmit,formState: { errors },} = useForm();
  const handleOpen = () => setOpen(true);
  const dispatch = useDispatch()
  const newAdminProduct = useSelector(adminProductSelector)

  const onSubmit = (data) => {
    const id = "id" + new Date().getTime()
    let currentObj = {
      price : data.price,
      size:data.size,
      location : data.location,
      id : id
    }
    currentObj.name = [data.name]
    axios.post(`${mainUrl}/allProducts`, currentObj)
    const arr = [
      currentObj,
      ...newAdminProduct
    ]
    dispatch(setAdminProduct(arr))
  };


  return (
    <div>
      <Button onClick={handleOpen}><AddBoxIcon/></Button>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
        <div>
        <form className="registrationForm" onSubmit={handleSubmit(onSubmit)} >
          <div className="registrationDiv addDiv">
          <label>
              Name
              <input
                {...register("name", { 
                  required: "Field is required",
                  
                  minLength : {
                    value : 4,
                    message : "*Minimum 4 characters for name!"
                  }
                 })}
                type="text"
                placeholder="Select clothes name"
              />
              
            <div className="errorMessage">
              {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
            </div>
            </label>
            <label>
              Price
              <input
                {...register("price", { 
                  
                  required: "Field is required",
                  
                  minLength : {
                    value : 4,
                    message : "*Minimum 4 characters for price!"
                  }
                 })}
                type="number"
                placeholder="Select price"
              />
              
            <div className="errorMessage">
              {errors?.price && <p>{errors?.price?.message || "Error!"}</p>}
            </div>
            </label>
            <label>
              Size
              <input
                {...register("size", {
                   required: "Field is required" ,
                   maxLength: {
                   value : 5,
                   message : "*Maximum 5 letters!"
                   }
                  })}
                type="text"
                placeholder="Select size"
              />
              <div className="errorMessage">
              {errors?.size && <p>{errors?.size?.message || "Error!"}</p>}
            </div>
            </label>
            <label>
              Image Link
              <input
                {...register("location", { 
                  required: "Field is required",
                  minLength : {
                    value : 10,
                    message : "*Minimum 10 characters for image link !"
                  }
                 })}
                type="text"
                placeholder="Select image link"
              />
              
            <div className="errorMessage">
              {errors?.location && <p>{errors?.location?.message || "Error!"}</p>}
            </div>
            </label>
            <button className="regSubmit" type="submit">Add</button>
          </div>
        </form>
      </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
export default addProduct
