import Feature from "../../components/feature/Feature"
import './whatAI.css'

function WhatAI() {
  
    return (
        <div className="ai__whatAi section__margin" id='whatAi'>
          <div className="ai__whatAi-feature">
            <Feature title="what is Abbey's - GPT"
              text=" this new amazing AI could do really mind blowing  stuffs for you,
               it could cook you a meal, drive your car for you, notice if there are any faults
               in a device based on given data " />
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
                text='knowledge is static power, application of knowledge is the real power in action'/>
              <Feature title='Education'
                text='you want to learn more on this scetion, keep scrolling'/>
          </div>
        </div>
    )
  }
  
  export default WhatAI