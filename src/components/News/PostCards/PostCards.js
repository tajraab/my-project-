import { React, useState, useEffect } from 'react'
import axios from 'axios'
import  "../PostCards/PostCards.css";
 const PostCards = () => {
  const [data, setData] = useState([])

  const formatDate = (publishedAt) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
      hour: '2-digit',
      second: '2-digit',
    }
    const formattedDate = new Date(publishedAt).toLocaleDateString(
      undefined,
      options
    )
    return formattedDate
  }

  useEffect(() => {
    axios
      .get(
        'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=e7cdfdb1358a4f1d9079d743a3f945e5'
      )
      .then((response) => {
        console.log(response.data.articles)
        setData(response.data.articles.slice(0, 5))
      })
      .catch((error) => {
        throw new Error(error)
      })
  }, [])

  return (
    <div className='postcards'>
      {data?.map(
        (data) =>
          data.author !== 'wsj' && (
            <div className='postcard' key={data.id}>
              <h3>{data.author}</h3>
              <h4>{data.content}</h4>
              <img src={data.urlToImage}/>
            </div>
          )
      )}
    </div>
  )
}

export default PostCards