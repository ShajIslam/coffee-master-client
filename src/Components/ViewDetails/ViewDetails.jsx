import { Link, useLoaderData} from 'react-router-dom';
import bg from '/11 3.png'


const ViewDetails = () => {
    const loadedCoffee = useLoaderData();
    const {name, chef, price, taste, category, details, photo } = loadedCoffee;
   
    
    return (
        <div>
              <img className='relative' src={bg} alt="" />
            <div className='flex items-center gap-12 max-w-5xl mx-auto bg-[#F4F3F0] px-36 py-10 mt-12 absolute top-0 left-[22%]'>
            
            <img src={photo} alt="" />
            <div>
                
                <h3 className='text-3xl font-bold text-[#331A15] mb-5'>{name}</h3>
                <h3><span  className='font-bold raleway'>Chef: </span><span  className='raleway text-sm text-gray-400 font-thin'>{chef}</span> </h3>
                <h3><span  className='font-bold raleway'>Taste: </span><span className='raleway text-sm text-gray-400 font-thin'>{taste}</span> </h3>
                <h3><span  className='font-bold raleway'>Category: </span><span className='raleway text-sm text-gray-400 font-thin'>{category}</span> </h3>
                <h3><span  className='font-bold raleway'>Details: </span><span className='raleway text-sm text-gray-400 font-thin'>{details}</span> </h3>
                <h3><span  className='font-bold raleway'>Price: </span><span className='raleway text-sm text-gray-400 font-thin'>{price} Taka</span> </h3>            
            </div>
           
        </div>
        <Link to={'/'}><button className='absolute top-2 left-[22%]'>Go Home</button></Link>

        </div>
    );
};

export default ViewDetails;