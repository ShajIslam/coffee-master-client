import navBg from '/images/Rectangle 1.png';
import logo from '/images/logo1 1.png'
import bannerBg from '/bg.png'

const Banner = () => {
    return (
        <div>
            <div className=''>
            <img className='relative' src={navBg} alt="" />
            <div className='flex items-center absolute top-0 left-[35%]'>
                <img className='w-16' src={logo} alt="" />
                <h1 className='text-4xl text-white'>Espresso Emporium</h1>
            </div>
            <img className='relative' src={bannerBg} alt="" />
            <div className='w-2/5 absolute top-[42%] left-[47%]'>
                <h1 className='text-4xl my-3 font-semibold text-white'>Would you like a Cup of Delicious Coffee?</h1>
                <p className='text-xs my-3 font-[Raleway] font-thin text-white'>It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='bg-[#E3B577] p-2 rounded-sm text-sm text-black'>Learn More</button>
            </div>
            </div>
             
              
        </div>
    );
};

export default Banner;