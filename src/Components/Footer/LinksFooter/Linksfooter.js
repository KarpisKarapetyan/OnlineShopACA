
import { NavLink } from 'react-router-dom'
import './LinksFooter.css'

function LinksFooter(){
    return (
        <div className='linksFooterDIV'>
                <nav className='liFooter'>
                    <ul>
                        <li>
                            <NavLink className="navFooter" to="Man">Man</NavLink>
                        </li>
                        <li>
                            <NavLink className="navFooter" to="tshirtMan">Man T-Shirts</NavLink> 
                        </li>
                        <li>
                            <NavLink className="navFooter" to="jacktetsMan">Man Jackets</NavLink>  
                        </li>
                        
                    </ul>
                </nav>

                <nav className='liFooter'>
                    <ul>
                        <li>
                            <NavLink className="navFooter" to="woman"> Woman</NavLink>
                        </li>
                        <li>
                            <NavLink className="navFooter" to="womanTshirt"> Woman T-Shirts</NavLink> 
                        </li>
                        <li>
                            <NavLink className="navFooter" to="womanJacket"> Woman Jackets </NavLink>  
                        </li>
                        
                    </ul>
                </nav>
                <nav className='liFooter'>
                    <ul>
                        <li>
                            <NavLink className="navFooter" to="kids"> Kids</NavLink>
                        </li>
                        <li>
                            <NavLink className="navFooter" to="kidsTshirt"> Kids T-Shirts</NavLink> 
                        </li>
                        <li>
                            <NavLink className="navFooter" to="kidsJacket">Kids Jackets </NavLink>  
                        </li>
                        
                    </ul>
                </nav>
                <nav className='liFooter'>
                    <ul>
                        <li>
                            <NavLink className="navFooter" to="MakeOrder"> Order </NavLink>
                        </li>
                        <li>
                            <NavLink className="navFooter" to="login"> Login</NavLink> 
                        </li>
                        <li>
                            <NavLink className="navFooter" to="Registration"> Register </NavLink>  
                        </li>
                        
                    </ul>
                </nav>
        </div>
    )
}
export default LinksFooter