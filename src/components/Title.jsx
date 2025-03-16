import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='inline-flex gap-3 items-center mb-3'>
        <p className='museomoderno text-purple font-light'>
            {text1} <span className='museomoderno text-purple font-medium'>{text2}</span>
        </p>
        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-purple'></p>
    </div>
  )
}

export {Title};