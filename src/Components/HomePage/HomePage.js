import './HomePage.css'
import "./Orders/Orders.css"
import NavBar from './NavBar/NavBar'
import Orders from './Orders/Orders'
import Products from './Products/Products'


const HomePage = () => {

    return(
        <div className='homePage'>
            <div className='filterDIV'>
                <NavBar/>
            </div>
            <div className="mainOrderDIV">
                <Orders/>
            </div>
           <div className='imgBox'>
               <div className='imgSize'>
               <Products/>
               </div>
           </div>
           
        </div>
    )
}

export default HomePage