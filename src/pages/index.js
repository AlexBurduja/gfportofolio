import { PiHouseFill } from 'react-icons/pi'

export default function Home() {
  return (
    <>
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
          
          <div className='navElement'>
            <PiHouseFill/>
          </div>
          
          <div className='navElement'>
          <p>Work</p>
          </div>

          <div className='navElement'>
          <p>Contact</p>
          </div>

        </div>
      </section>
    </>
  )
}
