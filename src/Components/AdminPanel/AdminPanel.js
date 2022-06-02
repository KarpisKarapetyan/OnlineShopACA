import "./adminPanel.css";
import { mainUrl } from "../../api/api";
import axios from "axios";
import { useEffect, useState } from "react";
import AddProduct from "./AddProduct/AddProduct"
import { useSelector } from 'react-redux';
import { isAddProductSelector} from '../../redux/slices/addProduct';
import { DeleteForever } from "@mui/icons-material";
import ChangePost from './changePost/changePost'

function AdminPanel() {
const [products,SetProducts] = useState(null)
const [open, setOpen] = useState(false);
const changeProductCount = useSelector(isAddProductSelector)
const [removeItem,setRemoveItem] = useState(false)
const[editWindow,setEditWindow]=useState(false)
const handleClose = () => setOpen(false);
const handleEditClose = ()=>setEditWindow(false)

 useEffect(()=>{
    axios.get(`${mainUrl}/allProducts`)
    .then((res) => SetProducts(res.data)); 
    setRemoveItem(false)
 },[removeItem,open,editWindow,changeProductCount])
  
  return (
    <div className="postsContanier">
        <div>
            <AddProduct  open={open} setOpen={setOpen} onClose={handleClose} />
        </div>  
      {products?.map((item, i,array) => {
        return (
            <div key={item.id} >
                <div className="posts"  >
                    <div className="postsIMG"> <img src={item.location}></img> </div>
                    <div><p>{item.name[0]}</p></div>
                    <div><p>{item.price}</p></div>
                    <div><p>{item.size}</p></div>
                    <div>  <ChangePost  id={item.id} open={editWindow} setOpen={setEditWindow} onClose={handleEditClose}  /> </div>
                    <div> <DeleteForever className="changeStateButton" onClick={()=> {
                        axios.delete(`${mainUrl}/allProducts/${item.id}`)
                        .then(setRemoveItem(true))
                        }}/>
                    </div>
                </div>
            </div>  
        );
      })}
    </div>
  );
}
export default AdminPanel;
