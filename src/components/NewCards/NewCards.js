import { React } from 'react'
import '../NewsCards/NewsCard.css'
import Postcards from './Postcards/Postcards'

export const NewsCards = () => {
  return (
    <div className='newscard-container'>
      <div className='news'>
        <Postcards />
      </div>
    </div>
  )
}

export default News