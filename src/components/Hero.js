import { NavLink } from 'react-router-dom';
import Toplook from '../img/toplook.png';

const Hero = () => {
  return (
    <section className="bg-[#c4ada0] h-[700px] bg-no-repeat bg-cover bg-center py-20" >
      <div className="container mx-auto flex justify-around h-full">
        {/*Text*/}
        <div className="flex flex-col justify-center">
          {/*pre-title*/}
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-red-500 mr-3'></div>New Trend
          </div>
          {/*Title*/}
          <h1 className='text-[63px] leading-[1.1] font-light mb-4'>
            REDUCTION SALE <br />
            <span className='font-semibold'>MEN'S CLOTHING</span>
          </h1>
          <NavLink to ={'/'} className='self-start uppercase font-semibold border-b-2 border-primary ' >
            Discover More
          </NavLink>
        </div>
        {/*Image*/}
        <div className='hidden lg:block '>
          <img src={Toplook} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero