import { PiHouseFill } from 'react-icons/pi'
import {BsLightbulbFill, BsLightbulb} from 'react-icons/bs'
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
import Image from 'next/image' 
import photo from '../publicResources/pozaGf.svg'
import pozaCerc from '../publicResources/Asset1.svg'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {AiOutlineInstagram, AiFillLinkedin} from 'react-icons/ai' 
import {FaTiktok} from 'react-icons/fa' 
import Link from 'next/link'
import Slider from 'react-slick'
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
import video1 from '../../public/video1.mp4'
import video2 from '../../public/video2.mp4'
import video3 from '../../public/video3.mp4'
import video4 from '../../public/video4.mp4'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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


      if (homeSection && aboutSection && resumeSection && workSection && contactSection) {
        const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
        const aboutBottom = aboutSection.offsetTop + aboutSection.offsetHeight;
        const resumeBottom = resumeSection.offsetTop + resumeSection.offsetHeight;
        const workBottom = workSection.offsetTop + workSection.offsetHeight;
        const contactBottom = contactSection.offsetTop + contactSection.offsetHeight;
  
        if (currentPosition >= homeBottom && currentPosition < aboutBottom) {
          setActiveSection('about');
        } else if (currentPosition >= aboutBottom && currentPosition < workBottom) {
          setActiveSection('work');
        } else if (currentPosition >= workBottom && currentPosition < resumeBottom) {
          setActiveSection('resume');
        } else if (currentPosition >= resumeBottom && currentPosition < contactBottom) {
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
  
  const sliderRef = useRef(null);

  useEffect(() => {
    // This ensures that the slider starts with the first slide
    
    sliderRef.current.slickGoTo(0);
  }, []);
  
  const videos = [
    { url: video1 },
    { url: video2 },
    { url: video3 },
    { url: video4 }

    // Add more videos as needed
  ];

  const settings = {
    infinite: true,
    slidesToScroll: 1,
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };
  

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
              <p><span>Name:</span> Grigorescu Carla</p>
              <p><span>Birthday:</span> 28.04.2004</p>
              <p><span>Age:</span> 19 years</p>
              <p><span>Address:</span> Bucharest, Romania</p>
            </div>

            <div>
              <p><span>Email:</span> carla.grigorescu@yahoo.com</p>
              <p><span>Phone:</span> +40773359168</p>
              <p><span>Tiktok:</span> <Link href={'https://www.tiktok.com/@carlagrigorescu2'} target='_blank'>Click here!</Link></p>
              <p><span>Freelance:</span> <a onClick={() => scrollToTop('contact')} className='freelanceAnchor'>Available</a></p>
            </div>
          </div>

        </div>


      </section>
      
      <section className='work' id='work'>
        <div className='workHeader'>
          <h1>My Work.</h1>
          <span>*all the footage is recorded and edited by me*</span>
        </div>
<div className='sliderContainer'>
        <Slider ref={sliderRef} {...settings} className='slider'>
      {videos.map((video, index) => (
        <div key={index} className='slide'>
          <div className='videoWrapper'>
            <video controls width="400" height="400" className='video'>
              <source src={video.url} type="video/mp4" />
            </video>
          </div>
        </div>
      ))}
    </Slider>
    <div className='controls'>
        <button onClick={handlePrev}><AiOutlineArrowLeft/></button>
        <button onClick={handleNext}><AiOutlineArrowRight/></button>
      </div>
</div>

      </section>

      <section className='resume' id='resume'>
        
      </section>
      

      <section className='contact' id='contact'>
        
      </section>
      </section>
    </>
  )
}
