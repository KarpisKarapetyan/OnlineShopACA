import emailjs from 'emailjs-com'
import './makeOrder.css'

export default function MakeOrder(){
    function sendEmail(e){
        e.preventDefault();
    emailjs.sendForm('gmail','template_4uaocbp', e.target, '_djmSf9Wq9j_GoJCy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }

    return (
            <div className="makeOrderDIV">
                <form className='registrationForm orderForm' onSubmit={sendEmail}>
                    <div className="registrationDiv orderDIV">
                    <p>We will make your MOOD a reality</p>
                        <div  >
                            <input type="text"  placeholder="Name" name="name"/>
                        </div>
                        <div  >
                            <input type="email"  placeholder="Email Address" name="email"/>
                        </div>
                        <div >
                            <input type="text"  placeholder="Subject" name="subject"/>
                        </div>
                        <div  >
                            <textarea  id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className='sendMessageBTn' >
                            <input type="submit" className = "submitEmail" value="Send Message" ></input>
                        </div>
                    </div>
                </form>
                <div className='contacts'>
                    <span>+374 00 000 000</span>
                    <span>zootmood2020@gmail.com</span>
                </div>
            </div>

    )
}
