import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import BellowBanner from "../BellowBanner/BellowBanner";
import PopularProducts from "../PopularProducts/PopularProducts";


const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <BellowBanner></BellowBanner>
         <h1 className=' text-[#331A15] font-bold my-24 text-3xl text-center'>Our Popular Products</h1>
         <PopularProducts></PopularProducts>
        <Link to={'/addCoffee'}><button className="btn bg-[#E3B577] flex ml-[45%] my-12">Add Coffee</button></Link>
         <h1 className="text-[#331A15] font-bold my-24 text-3xl text-center">Follow on Instagram</h1>
         
        </div>
    );
};

export default Home;