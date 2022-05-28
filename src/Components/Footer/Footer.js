import './Footer.css'
import whiteLogo from '../Images/whiteLogo.png'
import FbLogo from '../Images/FbLogo.png'
import instaLogo from '../Images/instaLogo.png'
import LinksFooter from './LinksFooter/Linksfooter'

function Footer (){
    return (
        <div className='mainFooter'>
            <div className='footerLogo'>
                <div>
                     <img src={whiteLogo}></img>
                </div>  
            </div>
            <div className='footerLinks'> 
               <LinksFooter/>
            </div>
            <div className='footerInput'> 
                <div className='footerIcons'>
                    <div  className='forCursor'>
                        <a target='_blank' href='https://www.facebook.com/Z00TM00D' ><img src={FbLogo}></img></a>       
                    </div>
                    <div className='forCursor'>
                        <a target='_blank' href='https://www.instagram.com/zoot.mood' ><img src={instaLogo}></img></a>       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer