import "./adminPanel.css";
import { mainUrl } from "../../api/api";
import axios from "axios";
import { useEffect, useState } from "react";
import AddProduct from "./AddProduct/AddProduct"
import { useSelector, useDispatch } from 'react-redux';
import {adminProductSelector , setAdminProduct} from '../../redux/slices/adminProducts'
import DELETEALL from './DELETEALL/DELETEALL'
import ProductComponent from "./productComponent"
import { isAddProductSelector } from "../../redux/slices/addProduct";

function AdminPanel() {
const [open, setOpen] = useState(false);
const [removeItem,setRemoveItem] = useState(false)
const handleClose = () => setOpen(false);
const dispatch = useDispatch()
const newAdminProduct = useSelector(adminProductSelector)
const isAddProduct = useSelector(isAddProductSelector)

useEffect(()=>{
  axios.get(`${mainUrl}/allProducts`)
.then((res) => dispatch(setAdminProduct(res.data)) );
setRemoveItem(false)
},[isAddProduct])
 
return ( 
      <div className="adminMain">
        <div className="postsContanier">
        <div>
            <h3>ADMIN PANEL</h3>
        </div>
            <div className="changePosts">
                <AddProduct  open={open} setOpen={setOpen} onClose={handleClose} />
                <div>  <DELETEALL  /> </div>
            </div>  
          {newAdminProduct?.map((item, index) => {
            return (
              <ProductComponent key={item.id} index={index} item={item}/>
            );
          })}
        </div>
      </div>   
  );
}
export default AdminPanel;
