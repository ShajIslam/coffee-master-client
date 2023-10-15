import aroma from '/images/1 1.png'
import quality from '/images/2 1.png'
import grades from '/images/3 1.png'
import roasting from '/images/4 1.png'

const BellowBanner = () => {
    return (
        <div className='bg-[#ECEAE3] flex justify-center items-center gap-10 py-10'>
            <div className='w-48 '>
                <img className='w-12' src={aroma} alt="" />
                <h1 className='text-xl my-2 text-[#331A15]'>Awesome Aroma</h1>
                <p className='text-sm text-[#331A15]'>You will definitely be a fan of the design & aroma of your coffee</p>

            </div>
            <div className='w-48'>
                <img className='w-12' src={quality} alt="" />
                <h1 className='text-xl my-2 text-[#331A15]'>High Quality</h1>
                <p className='text-sm text-[#331A15]'>We served the coffee to you maintaining the best quality</p>

            </div>
            <div className='w-48'>
                <img className='w-12' src={grades} alt="" />
                <h1 className='text-xl my-2 text-[#331A15]'>Pure Grades</h1>
                <p className='text-sm text-[#331A15]'>The coffee is made of the green coffee beans which you will love</p>

            </div>
            <div className='w-48'>
                <img className='w-12' src={roasting} alt="" />
                <h1 className='text-xl my-2 text-[#331A15]'>Proper Roasting</h1>
                <p className='text-sm text-[#331A15]'>Your coffee is brewed by first roasting the green coffee beans</p>

            </div>
            
        </div>
    );
};

export default BellowBanner;