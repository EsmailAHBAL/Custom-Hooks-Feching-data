/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

export default function Details({article}) {
  return (
    <div className={`m-2 p-4 bg-amber-50 flex flex-row hover:w-[330px] transition-none duration-1000 ease-in-out`}>
      <div>
        <img src={article.urlToImage}className='rounded-lg mb-4' alt='Image Not found'/>

        <div className="text-sm font-thin bg-amber-200 p-4 rounded-lg" >{article.title}</div>
        <div className="text-sm font-thin bg-amber-100 p-4 rounded-lg mt-2" >{article.description}</div>
        <div className="text-sm font-extrabold mt-4">
          <button className='bg-amber-300 rounded-lg p-4 duration-1000 ease-in-out hover:bg-amber-100'>Read More</button>
        </div>

        <div className="text-sm font-extrabold mt-4">{article.author}</div>
         <hr />
      </div>
    </div>
  )
}
