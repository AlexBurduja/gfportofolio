import { PiHouseFill } from 'react-icons/pi'
import {BsLightbulbFill, BsLightbulb} from 'react-icons/bs'
import Image from 'next/image' 
import photo from '../publicResources/pozaGf.svg'
import pozaCerc from '../publicResources/Asset1.svg'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {AiOutlineInstagram, AiFillLinkedin} from 'react-icons/ai' 
import {FaTiktok} from 'react-icons/fa' 

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
      root.style.setProperty('--secondary', '#7D80B3')
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

  const scrollToTop = (sectionId) => {
    const section = document.getElementById(sectionId)

    if(section){
      window.scrollTo({
        top: section.offsetTop,
        behavior:'smooth'
      });
    }
  }

  const [activeSection, setActiveSection] = useState('home')

  
  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');
      const resumeSection = document.getElementById('resume');
      const workSection = document.getElementById('work');
      const contactSection = document.getElementById('contact');
      const currentPosition = window.scrollY;

      console.log(currentPosition)
      console.log(activeSection)

      if (homeSection && aboutSection && resumeSection && workSection && contactSection) {
        const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
        const aboutBottom = aboutSection.offsetTop + aboutSection.offsetHeight;
        const resumeBottom = resumeSection.offsetTop + resumeSection.offsetHeight;
        const workBottom = workSection.offsetTop + workSection.offsetHeight;
        const contactBottom = contactSection.offsetTop + contactSection.offsetHeight;
  
        if (currentPosition >= homeBottom && currentPosition < aboutBottom) {
          setActiveSection('about');
        } else if (currentPosition >= aboutBottom && currentPosition < resumeBottom) {
          setActiveSection('resume');
        } else if (currentPosition >= resumeBottom && currentPosition < workBottom) {
          setActiveSection('work');
        } else if (currentPosition >= workBottom && currentPosition < contactBottom) {
          setActiveSection('contact');
        } else {
          setActiveSection('home');
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);
  

  return (
    <>
    <section className='wholeSite'>
      <section className='navWrapper'>
        <div className='nav'>
          <div className='navElement'>
              <div>
                <p className={activeSection === 'about' ? 'active' : ''} onClick={() => scrollToTop('about')}>About</p>  
              </div>
          </div>
          
          <div className='navElement'>
            <div> 
              <p className={activeSection === 'resume' ? 'active' : ''} onClick={() => scrollToTop('resume')}>Resume</p>
            </div>
          </div>
          
          <div className='navElement__clickableHouse'>
              <div>
                <PiHouseFill className={activeSection === 'home' ? 'active' : ''} onClick={() => scrollToTop('home')}/>
              </div>
          </div>
          
          <div className='navElement__clickable'>
            <button onClick={changeBulb}>
              {bulb ? <BsLightbulb /> : <BsLightbulbFill/>}
            </button>
          </div>
          
          <div className='navElement'>
            <div>
              <p className={activeSection === 'work' ? 'active' : ''} onClick={() => scrollToTop('work')}>Work</p>
            </div>
          </div>

          <div className='navElement'>
            <div>
              <p className={activeSection === 'contact' ? 'active' : ''} onClick={() => scrollToTop('contact')}>Contact</p>
            </div>
          </div>
        </div>
      </section>

      <section className='firstContent' id='home'>
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
            transition={{ duration: 0.5, ease: "easeOut" }}
            >

            <motion.p >{currentWord}</motion.p>
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

      <section className='about' id='about' >
        <div className='about__pozaFlex'>
          <div className='about__pozaFlex__imageDiv'>
           <Image src={pozaCerc} width={350} height={350} alt='pozaGfCerc'/>
            <div className='imageIcons'>
              <button className='icon'><AiOutlineInstagram/></button>
              <button className='icon'><AiFillLinkedin /></button>
              <button className='icon'><FaTiktok /></button>
            </div>
          
          </div>

          <div className='about__pozaFlexMovingText'>
            <AnimatePresence>
            <motion.div 
              key={currentWord}
              initial={{opacity: 0, y:20}}
              animate={{opacity: 1, y:0}}
              exit={{opacity: 0, y:-20}}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{position:'absolute'}}
              >

              <motion.p >{currentWord}</motion.p>
            </motion.div>  
          </AnimatePresence>
        </div>

        <div>
          <p>Carla Grigorescu</p>
        </div>

        </div>

        <div className='about__biography'>
          <div className='about__biography__biography'>
            <h1>Biography</h1>
            <p>Salut, eu sunt Carla Gigorescu si sunt mic, gras, frumos, dragut, amuzant, mic din nou si cel mai talentat mic. Sunt in anul 2 de facultate desi eu am 2 ani inca. Sper ca o sa ma angajati peste tot pentru ca eu sunt mic si voinic. Fac papa buna si sunt mic.</p>
          </div>

          <div className='about__biography__informations'>
            <div>
              <p>Name: Grigorescu Carla</p>
              <p>Birthday:  28.04.2004</p>
              <p>Age: 19 years</p>
              <p>Address: Bucharest, Romania</p>
            </div>

            <div>
              <p>Email: carla.grigorescu@yahoo.com</p>
              <p>Phone: +40773359168</p>
              <p>Tiktok: </p>
              <p>Freelance: Available</p>
            </div>
          </div>

        </div>


      </section>
      
      <section className='resume' id='resume'>
        
      </section>
      
      <section className='work' id='work'>
        
      </section>

      <section className='contact' id='contact'>
        
      </section>
      </section>
    </>
  )
}
