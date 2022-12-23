import React, {useState} from 'react'
import App from '../../App'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'

const images = [
  './images/IMG001.jpeg',
  './images/IMG002.jpeg',
  './images/IMG003.jpeg',
  './images/IMG004.jpeg',
  './images/IMG005.jpeg',
  './images/IMG006.jpeg',
  './images/IMG007.jpeg',
  './images/IMG008.jpeg',
  './images/IMG009.jpeg',
  './images/IMG010.jpeg',
  './images/IMG011.jpeg',
  './images/IMG012.jpeg',
  './images/IMG013.jpeg',
  './images/IMG014.jpeg',
  './images/IMG015.jpeg',
  './images/IMG016.jpeg',
  './images/IMG017.jpeg',
  './images/IMG018.jpeg',
  './images/IMG019.jpeg',
  './images/IMG020.jpeg'

]

function Gallery() {
  const [data, setData] =useState({img: '', i: 0})

  const viewImage =(img, i) => {
    setData({img, i})
  }
  const imgAction = (action) => {
    let i = data.i;
    if(action === 'next-img'){
      setData({img: images[i + 1], i: i + 1})
    }
    if(action === 'previous-img'){
      setData({img: images[i - 1], i: i - 1})
    }
    if(!action){
      setData({img: '', i: 0})
    }
  }
  return (
    <>
    <h1 style={{
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: '10px'
    }}
    >
      Gallery
      </h1>

    <p style={{
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: '10px'
    }}>
      From custom backdrops to centerpieces! You ask and I will deliever!
    </p>

    
    {data.img &&
      <div style={{
        width: '100%',
        height: '100vh',
        background: 'rgb(156, 156, 227)',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',

      }}>
        <button onClick={() => imgAction()} style={{position: 'absolute', top: 0, right: 0}}>X</button>
        <button onClick={() => imgAction('previous-img')}>Previous</button>
        <img src={data.img} style={{width: 'auto', maxWidth: '90%', maxHeight: '90%'}}/>
        <button onClick={() => imgAction('next-img')}>Next</button>
        </div>

    }
      <div style={{padding: '10px'}}>
        <ResponsiveMasonry
        columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
        >
        <Masonry gutter='20px'>
        {images.map((image, i) => (
          <img 
          key={i}
          src={image}
          style={{width: "100%", display: "block", cursor: 'pointer'}}
          alt=''
          onClick={() => viewImage(image,i)}
          />
        ))}
      </Masonry>
      </ResponsiveMasonry>
      </div>
    </>
  )
}

export default Gallery