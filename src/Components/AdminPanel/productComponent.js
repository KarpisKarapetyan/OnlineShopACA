import ChangePost from './changePost/changePost'
import Button from '@mui/material/Button';
import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { DeleteForever } from "@mui/icons-material";
import {adminProductSelector , setAdminProduct} from '../../redux/slices/adminProducts'
import { mainUrl } from "../../api/api";

const productComponent = ({item,index}) => {
    const [open, setOpen] = useState(false);
    const[editWindow,setEditWindow]=useState(false)
    const handleEditClose = ()=>setEditWindow(false)
    const dispatch = useDispatch()
    const newAdminProduct = useSelector(adminProductSelector)
    const {id} = item

  return (
    <div>
      <div className="allProdcuts">
        <div className="posts">
          <div className="postsIMG">
            <img src={item.location}></img>
          </div>
          <div><p>{item.name[0]}</p> </div>
          <div><p>{item.price}</p></div>
          <div><p>{item.size}</p></div>
          <div><ChangePost index={index} id={item.id} open={editWindow} setOpen={setEditWindow}onClose={handleEditClose}/> </div>
          <div><Button> <DeleteForever onClick={() => {
            axios.delete(`${mainUrl}/allProducts/${id}`)
            .then(()=>{
              const arr = [...newAdminProduct]
              arr.splice(index,1)
              dispatch(setAdminProduct(arr))
            } )}}/></Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default productComponent
