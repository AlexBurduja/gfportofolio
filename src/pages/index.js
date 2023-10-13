import { PiHouseFill } from 'react-icons/pi'
import {BsLightbulbFill, BsLightbulb} from 'react-icons/bs'
import Image from 'next/image' 
import photo from '../publicResources/pozaGf.png'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {

  const words = ['Content Creator', 'Social Media Specialist', 'Marketing Specialist', 'Freelancer']

  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((index) => (index + 1) % words.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [words.length])

  function changeColors(){
    const root = document.documentElement

    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary')
    const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary')
    
    if(primaryColor === '#4e4a59' && secondaryColor === '#f64adf'){
      root.style.setProperty('--primary', '#1a1a1a')
      root.style.setProperty('--secondary', '#ffffff')
    } else {
      root.style.setProperty('--primary', '#4e4a59')
      root.style.setProperty('--secondary', '#f64adf')
    }
  }

  const currentWord = words[wordIndex]

  const [bulb, setBulb] = useState(true)

  const changeBulb = () => {
    setBulb(!bulb)
    changeColors();
  }

  return (
    <>
    <section className='wholeSite'>
      <section className='navWrapper'>
        <div className='nav'>

          <div className='navElement'>
            <p>About</p>
          </div>
          
          <div className='navElement'>
            <p>Resume</p>
          </div>
          
          <div className='navElement'>
            <PiHouseFill/>
          </div>
          
          <div className='navElement__clickable'>
            <button onClick={changeBulb}>
              {bulb ? <BsLightbulb /> : <BsLightbulbFill/>}
            </button>
          </div>
          
          <div className='navElement'>
          <p>Work</p>
          </div>

          <div className='navElement'>
          <p>Contact</p>
          </div>

        </div>
      </section>

      <section className='firstContent'>
        <div className='firstContent__description'>
          <div>
            <p>Hi, my name is</p> 
          </div>

          <div>
            <p>Carla Grigorescu </p>
          </div>

        <div className='firstContent__description__movingText'>
          <AnimatePresence>
          <motion.div style={{ position: 'absolute', width: '100%'}}
            key={currentWord}
            initial={{opacity: 0, y:20}}
            animate={{opacity: 1, y:0}}
            exit={{opacity: 0, y:-20}}
            >

            <motion.p style={{color: 'red', fontWeight: 'bold'}}>{currentWord}</motion.p>
          </motion.div>
            
          </AnimatePresence>
        </div>

          <div>
            <p>I am a very creative person and i strive to create marketing campaigns that will result in a big impact.</p>
          </div>

        </div>

        <div className='firstContent__photo'>
          <Image src={photo} alt='pozaEu' width={500} height={500}/>
        </div>
      </section>

      <section className='secondContent'>
        
      </section>
      </section>
    </>
  )
}
