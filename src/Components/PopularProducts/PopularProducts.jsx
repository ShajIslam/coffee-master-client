import { useEffect, useState } from "react";
import PopularProduct from "./PopularProduct/PopularProduct";
import Swal from "sweetalert2";

const PopularProducts = () => {

    const [coffees, setCoffees] = useState([]);
  
    useEffect(()=>{
        fetch('http://localhost:8001/coffee')
        .then(res=> res.json())
        .then(data => setCoffees(data))
    }, [])

    const handleDelete = (_id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:8001/coffee/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                              Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                            const remainning = coffees.filter((singleCoffee)=> singleCoffee._id !== _id);
                            setCoffees(remainning)
                        }
                    })
            }
        })
    }



    return (
        <div className="grid grid-cols-2 gap-5 ml-5">
            {
                coffees.map((coffee)=> <PopularProduct
                
                key={coffee.key}
                coffee={coffee}
                handleDelete ={handleDelete}
                
                ></PopularProduct>)
            }
          
        </div>
    );
};

export default PopularProducts;