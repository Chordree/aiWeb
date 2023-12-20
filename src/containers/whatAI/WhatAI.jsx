import Feature from "../../components/feature/Feature"
import './whatAI.css'

function WhatAI() {
  
    return (
        <div className="ai__whatAi section__margin" id='whatAi'>
          <div className="ai__whatAi-feature">
            <Feature title="what is Abbey's - GPT"
              text="Whole front do of plate heard oh ought. 
                    His defective nor convinced residence more and
                    more text to see what happens welcome " />
          </div>
          <div className="ai__whatAi-heading">
            <h1 className="gradient__text">
                The future possibilities are beyond imagination
            </h1>
            <p> Explore the library </p>
          </div>
          <div className="ai__whatAi-container">
              <Feature title='Chatbots'
                text='hey hey hey you know what lets checkout'/>
              <Feature title={'knowledge'}
                text='cahnge you later'/>
              <Feature title='Education'
                text='you want to learn more on this scetion'/>
          </div>
        </div>
    )
  }
  
  export default WhatAI