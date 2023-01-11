import React, { useState } from 'react'
import '../index.css'

const Image = () => {
  const [imgWidth, setImgWidth] = useState(700)
  const [isDisplay, setIsDisplay] = useState(false)

  return (
    <>
      {isDisplay && <Img imgWidth={imgWidth} />}
      <Buttons setIsDisplay={setIsDisplay} setImgWidth={setImgWidth}></Buttons>
    </>
  )
}

const Img = ({ imgWidth }) => {
  return (
    <>
      <a href='https://www.denver.org/' target='_blank'>
        <img
          style={{ width: imgWidth + 'px', height: 'auto' }}
          src='https://upload.wikimedia.org/wikipedia/commons/e/e8/Denver_skyline.jpg'
          alt='denver'
        />
        ;
      </a>
    </>
  )
}

const Buttons = ({ setIsDisplay, setImgWidth }) => {
  return (
    <div>
      <button onClick={() => setIsDisplay(true)}>Додати</button>
      <button
        onClick={() => {
          setImgWidth((prev) => prev * 1.1)
        }}
      >
        Збільшити
      </button>
      <button
        onClick={() => {
          setImgWidth((prev) => prev * 0.9)
        }}
      >
        Зменшити
      </button>
      <button onClick={() => setIsDisplay(false)}>Видалити</button>
    </div>
  )
}

export default Image
