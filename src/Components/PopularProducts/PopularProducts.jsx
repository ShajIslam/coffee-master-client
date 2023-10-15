import { AiOutlineEye, AiOutlineDelete } from 'react-icons/ai';
import { CiEdit } from 'react-icons/ci';
import coffee from '/14 1.png'
import './style.css'
const PopularProducts = () => {
    return (
        <div className='grid grid-cols-2 ml-7'>
            <div className='flex items-center gap-10 bg-[#F5F4F1] w-[600px] p-5 rounded-sm'>
            
            <img className='w-52' src={coffee} alt="" />
            <div>
                <h3 ><span className='font-bold raleway'>Name: </span><span  className='raleway text-sm text-gray-400 font-thin'>Americano Coffee</span> </h3>
                <h3><span  className='font-bold raleway'>Chef: </span><span  className='raleway text-sm text-gray-400 font-thin'>Mr. Matin Paul</span> </h3>
                <h3><span  className='font-bold raleway'>Price: </span><span className='raleway text-sm text-gray-400 font-thin'>890 Taka</span> </h3>
            
            </div>
            <div>
                <div className='bg-[#D2B48C] p-1 text-white rounded-sm '>
                    <AiOutlineEye></AiOutlineEye>
                </div>
                <div className='bg-[#3C393B] p-1 text-white rounded-sm my-2'>
                    <CiEdit></CiEdit>
                </div>
                <div className='bg-[#EA4744] p-1 text-white rounded-sm'>
                    <AiOutlineDelete></AiOutlineDelete>
                </div>
            </div>
        </div>
            <div className='flex items-center gap-10 bg-[#F5F4F1] w-[600px] p-5 rounded-sm'>
            
            <img className='w-52' src={coffee} alt="" />
            <div>
                <h3 ><span className='font-bold raleway'>Name: </span><span  className='raleway text-sm text-gray-400 font-thin'>Americano Coffee</span> </h3>
                <h3><span  className='font-bold raleway'>Chef: </span><span  className='raleway text-sm text-gray-400 font-thin'>Mr. Matin Paul</span> </h3>
                <h3><span  className='font-bold raleway'>Price: </span><span className='raleway text-sm text-gray-400 font-thin'>890 Taka</span> </h3>
            
            </div>
            <div>
                <div className='bg-[#D2B48C] p-1 text-white rounded-sm '>
                    <AiOutlineEye></AiOutlineEye>
                </div>
                <div className='bg-[#3C393B] p-1 text-white rounded-sm my-2'>
                    <CiEdit></CiEdit>
                </div>
                <div className='bg-[#EA4744] p-1 text-white rounded-sm'>
                    <AiOutlineDelete></AiOutlineDelete>
                </div>
            </div>
        </div>
        </div>
    );
};

export default PopularProducts;