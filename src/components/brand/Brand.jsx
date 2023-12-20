import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'
import './brand.css'

const brandLogos = [google, atlassian, slack, dropbox, shopify]

function Brand() {
  return (
      <div className='ai__brand section__padding' >
        {
          brandLogos.map((logo, index)=>(
            <div key={String(logo)}>
              <img src={logo} alt={'brand logo' + index} />
            </div>
          ))
        }
      </div>
  )
  
}

export default Brand