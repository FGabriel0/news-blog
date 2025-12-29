import React from 'react'
import Weather from './Weather'
import Calendar from './Calendar'
import "./News.css"

const News = () => {
  return (
    <div className='news'>
        <header className="news-header">News Header</header>
        <div className='news-content'>
            <div className='navbar'>
                <div className='user'>USER</div>
                <nav className='categories'>categories</nav>
            </div>
            <div className='news-section'>
                <div className='headline'>HeadLine</div>
                <div className='news-grid'>News Grid</div>
            </div>
        <div className='my-blogs'> My blogs</div>
        <div className='weather-calendar'>
            <Weather/>
            <Calendar/>
        </div>
    
        </div>
        <footer className='news-footer'>Footer</footer>

    </div>
  )
}

export default News