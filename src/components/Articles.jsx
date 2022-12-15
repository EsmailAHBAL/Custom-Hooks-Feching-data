import React from 'react'
import Details from './Details'

export default function Articles({articles}) {
  return (
    <div className='columns-1 md:columns-3'>
  
      {
       !articles  ? null :(

         articles.map(item=> (
           <Details className="" key={Math.random()} article={item}></Details>
           ))       
           )
      }
    </div>
  )
}
