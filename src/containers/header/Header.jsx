import './header.css'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';


function Header() {
  
    return (
        <div className='ai__header section__padding' id='home'>
            <div className='ai__header-content'>
              <h1 className='gradient__text'>
                  lets build amazing stuffs with this
                  model of Abbey's AI
              </h1>
              <p>
                Hello welocme to this platform where you could do some
                some generative stuffs with AI, customise your workflow and 
                have seamless development and production experience
              </p>
              <div className="ai__header-content__input">
                    <input type="email" placeholder="enter your Email Address" />
                    <button type="button">Get Started</button>
               </div>
               <div className='ai__header-content__people'>
                    <img src={people} alt="multiple chat heads" />
                    <p> over 5million users requested access in last 48hrs</p>
               </div>
            </div>
            <div className='ai__header-image'>
                <img src={ai} alt="robot head" />
            </div>
        </div>
    )
  }
  
  export default Header
  