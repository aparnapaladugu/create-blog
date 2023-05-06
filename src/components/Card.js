import React from 'react'
import "./card.scss"


const Card = ({item}) => {
  // console.log(item.imageUrl);
  return (
    <article>
        <h2> {item.title} </h2>
        <img src={item.imageUrl} alt="blog img" />
        <p> 
          {item.dummyText}
        </p>
        <div className="tags">
            {
              item.tags?.map((tag)=>{
                return <span>{tag}</span>
              })
            }
        </div>
        {/* <div className="about-post">
            <span>author - Aparna</span>
        </div> */}
    </article>
  )
}

export default Card