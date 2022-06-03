import ChangePost from './changePost/changePost'
import Button from '@mui/material/Button';
import axios from "axios";
import { useEffect, useState } from "react";
import AddProduct from "./AddProduct/AddProduct"
import { useSelector, useDispatch } from 'react-redux';
import { DeleteForever } from "@mui/icons-material";
import {adminProductSelector , setAdminProduct} from '../../redux/slices/adminProducts'
import DELETEALL from './DELETEALL/DELETEALL'
import { mainUrl } from "../../api/api";
import { isAddProductSelector, setIsAddProduct } from '../../redux/slices/addProduct';

const productComponent = ({item}) => {
    const [open, setOpen] = useState(false);
    const [removeItem,setRemoveItem] = useState(false)
    const[editWindow,setEditWindow]=useState(false)
    const handleClose = () => setOpen(false);
    const handleEditClose = ()=>setEditWindow(false)
    const dispatch = useDispatch()
    const newAdminProduct = useSelector(adminProductSelector)
    const {id} = item

  return (
    <div>
      <div className="allProdcuts">
        <div className="posts">
          <div className="postsIMG">
            {" "}
            <img src={item.location}></img>{" "}
          </div>
          <div>
            <p>{item.name[0]}</p>
          </div>
          <div>
            <p>{item.price}</p>
          </div>
          <div>
            <p>{item.size}</p>
          </div>
          <div>
            {" "}
            <ChangePost
              id={item.id}
              open={editWindow}
              setOpen={setEditWindow}
              onClose={handleEditClose}
            />
          </div>
          <div>
            {" "}
            <Button>
              <DeleteForever
                onClick={() => {
                  axios
                    .delete(`${mainUrl}/allProducts/${id}`)
                    .then(setIsAddProduct(1))
                }}
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default productComponent
