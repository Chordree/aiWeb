import './article.css'

function Article({postImg, date, text}) {

  return (
    <div className="ai__blog-container_article">
      <div className="ai__blog-container_article-image">
        <img src={postImg} alt="blog_image" />
      </div>
      <div className="ai__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read the full Article</p>
      </div>
    </div>
  )
}

export default Article