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
           <div>
               <Products/>
           </div>
           
        </div>
    )
}

export default HomePage