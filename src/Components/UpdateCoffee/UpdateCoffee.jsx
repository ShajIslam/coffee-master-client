import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import bg from '/11 3.png'
const UpdateCoffee = () => {

    const coffee = useLoaderData();

    const { name, chef, price, taste, category, details, photo, _id } = coffee;

    const handleAddCoffee=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const price = form.price.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const UpdateCoffee = {name, chef, price, taste, category, details, photo}
        console.log(UpdateCoffee);

        fetch(`http://localhost:8001/coffee/${_id}`,{
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateCoffee)

        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount>0){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Updated coffee successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                
            }
        })
    }

    return (
        <div>
           <img className='relative' src={bg} alt="" />
           
            <div className="bg-[#F4F3F0] px-24 py-10 mt-12 absolute top-0 left-[15%]">
               
            <h2 className="text-3xl font-extrabold text-center mb-5">Update Existing Coffee Details</h2>
            <br />
            <p className="text-sm font-[Raleway] mb-5 w-[700px]">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <form onSubmit={handleAddCoffee}>
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="chef" defaultValue={chef} placeholder="Chef name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Coffee Details" className="btn btn-block bg-[#D2B48C]" />

            </form>
            {/* <Link to={'/home'}><button>Home</button></Link> */}
        </div>
        <Link to={'/home'}><button className='absolute top-3 left-[15%]'>Go Home</button></Link>
        </div>
    );
};

export default UpdateCoffee;