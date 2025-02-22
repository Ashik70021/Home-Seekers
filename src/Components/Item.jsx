import { Link } from "react-router-dom";

const Item = ({ item }) => {
    const { id, img, estate_title, segment_name, description, price, status, area, location, facilities } = item ;
    return (
        <div className="max-auto p-6 shadow-md border border-violet-500 rounded-xl">
            <img src={img} alt="" className=" mx-auto object-cover object-center rounded-md dark:bg-gray-500" />
            <div className="card-body text-center">
                <div className="">
                    <h1 className="pl-3 pr-3 pb-2 pt-2 bg-violet-100 text-violet-800 rounded-3xl text-xl font-semibold">{price}</h1>
                </div>
                <h2 className="card-title items-start font-bold text-2xl text-[#131313]">{estate_title}</h2>
                <p className=" card-title items-start  text-[#131313cc] font-medium text-lg">By: {segment_name}</p>
                <hr className="mt-2 dashed" />
                <div className="flex justify-between mt-4">
                    <div>
                        <span className="text-[#131313cc] font-medium text-xl">{status}</span>
                    </div>
                    <div className="flex gap-3">
                        <p className="text-xl font-medium text-[#131313cc]">{area}</p>
                    </div>
                </div>
                <div>

                </div>
                <Link to={`/itemdetails/${id}`}><button className="mt-4 btn w-full bg-violet-500 text-white">View Property</button></Link>
            </div>
        </div>
    );
};

export default Item;