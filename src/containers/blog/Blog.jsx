import Article from "../../components/article/Article"
import blog01 from '../../assets/blog01.png'
import blog02 from '../../assets/blog02.png'
import blog03 from '../../assets/blog03.png'
import blog04 from '../../assets/blog04.png'
import blog05 from '../../assets/blog05.png'

import './blog.css'

const blogPosts = [
  {
    image: blog02,
    date: "Aug 18th, 2023",
    text: "GPT-X and Abbey's AI is the future. Let us exlore together?"
  },
  {
    image: blog03,
    date: "Jul 21st, 2023",
    text: "GPT-X and Abbey's AI is the future. Let us exlore together?"
  },
  {
    image: blog04,
    date: "dec 18th, 2022",
    text: "GPT-X and Abbey's AI is the future. Let us exlore together?"
  },
  {
    image: blog05,
    date: "Jun 22nd, 2022",
    text: "GPT-X and Abbey's AI is the future. Let us exlore together?"
  }  
]

function Blog() {

    return (
        <div className="ai__blog section__padding" id="blog">
          <div className="ai__blog-heading">
            <h1 className="gradient__text">
              What's happening in the AI world ? <br /> 
              Get the latest news form our blog.
            </h1>
          </div>
          <div className="ai__blog-container">
            <div className="ai__blog-container_latest">
              <Article postImg={blog01} date='12th nov 2023'
                text='checkout the most recent post'/>
            </div>
            <div className="ai__blog-container_others">
              {
                blogPosts.map((blogPost)=>(
                    <Article postImg={blogPost.image} date={blogPost.date}
                      text={blogPost.text} />
                ))
              }      
            </div>
          </div>
        </div>
    )
  }
  
  export default Blog
