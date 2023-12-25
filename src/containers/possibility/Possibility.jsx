import visionImage from '../../assets/Possibility.png'
import './possibility.css'

function Possibility() {

    return (
        <div className="ai__possibility section__padding" id="possibility">
          <div className="ai__possibility-image">
            <img src={visionImage} alt="lady with VR headset" />
          </div>
          <div className='ai__possibility-content'>
            <h4> Don't hesistate registernow and get started</h4>
            <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
            <p> 
              imagine having an AI assistant that could be a great PA,
               carry out tasks for you, cook you delicious meals,
              do house chores for you, drive you and make repairs for your vehicles,
               and many other activities that could stress you

            </p>
            <h4>Sign up now and get <em>Early Access</em></h4>
          </div> 
        </div>
    )
  }
  
  export default Possibility

