import { AiOutlineEye, AiOutlineDelete } from 'react-icons/ai';
import { CiEdit } from 'react-icons/ci';
import '../style.css'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useState } from 'react';

const PopularProduct = ({ coffee, handleDelete }) => {
    const { name, chef, price, photo, _id } = coffee;
    

    return (
        <div>
            <div className='flex items-center gap-10 bg-[#F5F4F1] w-[600px] h-[300px] p-5 rounded-sm'>

                <img className='w-48' src={photo} alt="" />
                <div>
                    <h3 ><span className='font-bold raleway'>Name: </span><span className='raleway text-sm text-gray-400 font-thin'>{name}</span> </h3>
                    <h3><span className='font-bold raleway'>Chef: </span><span className='raleway text-sm text-gray-400 font-thin'>{chef}</span> </h3>
                    <h3><span className='font-bold raleway'>Price: </span><span className='raleway text-sm text-gray-400 font-thin'>{price} Taka</span> </h3>

                </div>
                <div>
                    <Link to={`/viewDetails/${_id}`}><div className='bg-[#D2B48C] p-1 text-white rounded-sm '>
                        <AiOutlineEye></AiOutlineEye>
                    </div></Link>
                    <div className='bg-[#3C393B] p-1 text-white rounded-sm my-2'>
                        <CiEdit></CiEdit>
                    </div>
                    <div onClick={() => handleDelete(_id)} className='bg-[#EA4744] p-1 text-white rounded-sm'>
                        <AiOutlineDelete></AiOutlineDelete>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularProduct;