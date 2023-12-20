import './footer.css'
import logo from '../../assets/logo.svg'

function Footer() {
  

    return (
      <div className="ai__footer section__padding">
        <div className="ai__footer-heading">
          <h1 className="gradient__text">Do you want to step in to the future before others</h1>
        </div>
    
        <div className="ai__footer-btn">
          <p>Request Early Access</p>
        </div>
    
        <div className="ai__footer-links">
          <div className="ai__footer-links_logo">
            <img src={logo} alt="gpt3_logo" />
            <p>kings city Atlantic palace <br /> All Rights Reserved</p>
          </div>
          <div className="ai__footer-links_div">
            <h4>Links</h4>
            <p>Social Media</p>
            <p>Counters add a couter bottun here</p>
            <p>Contact</p>
          </div>
          <div className="ai__footer-links_div">
            <h4>Company</h4>
            <p>Terms & Conditions </p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="ai__footer-links_div">
            <h4>Get in touch</h4>
            <p>kings city Atlantic palace</p>
            <p>+234-8062162738</p>
            <p>Abbey@callme.net</p>
          </div>
        </div>
    
        <div className="ai__footer-copyright">
          <p>@2022 GPT-X. All rights reserved.</p>
        </div>
      </div>
    )
  }
  //src gptx logo
  // and the copy right html text i.e using the &&
  export default Footer