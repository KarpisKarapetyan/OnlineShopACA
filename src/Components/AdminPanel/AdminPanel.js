import "./adminPanel.css";
import { mainUrl } from "../../api/api";
import axios from "axios";
import { useEffect, useState } from "react";
import AddProduct from "./AddProduct/AddProduct"
import { useSelector, useDispatch } from 'react-redux';
import { DeleteForever } from "@mui/icons-material";
import {adminProductSelector , setAdminProduct} from '../../redux/slices/adminProducts'
import Button from '@mui/material/Button';
import ChangePost from './changePost/changePost'
import DELETEALL from './DELETEALL/DELETEALL'

function AdminPanel() {
const [open, setOpen] = useState(false);
const [removeItem,setRemoveItem] = useState(false)
const[editWindow,setEditWindow]=useState(false)
const handleClose = () => setOpen(false);
const handleEditClose = ()=>setEditWindow(false)
const dispatch = useDispatch()
const newAdminProduct = useSelector(adminProductSelector)

useEffect(()=>{
  axios.get(`${mainUrl}/allProducts`)
.then((res) => dispatch(setAdminProduct(res.data)) );
setRemoveItem(false)
},[removeItem])
 
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
                <div key={item.id} className="allProdcuts" >
                    <div className="posts"  >
                        <div className="postsIMG"> <img src={item.location}></img> </div>
                        <div><p>{item.name[0]}</p></div>
                        <div><p>{item.price}</p></div>
                        <div><p>{item.size}</p></div>
                        <div>  <ChangePost index={index} id={newAdminProduct[index].id} open={editWindow} setOpen={setEditWindow} onClose={handleEditClose}  /></div>
                        <div> <Button><DeleteForever onClick={()=> {
                            axios.delete(`${mainUrl}/allProducts/${item.id}`)
                            .then(setRemoveItem(true))
                            }}/></Button> 
                        </div>
                    </div>
                </div>  
            );
          })}
        </div>
      </div>
   
  );
}
export default AdminPanel;
