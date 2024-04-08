import { Link } from "react-router-dom";

const Item = ({ item }) => {
    const { id, img, estate_title, segment_name, description, price, status, area, location, facilities } = item;
    console.log(id)
    return (
        <div className="max-auto p-6 rounded-md shadow-md border rounded-xl">
            <img src={img} alt="" className=" mx-auto object-cover object-center rounded-md dark:bg-gray-500" />
            <div className="card-body text-center">
                <div className="flex justify-start">
                    <h1 className=" pl-2 pr-2 pb-1 pt-1 bg-[#e8ffe5] text-[#23BE0A] rounded-3xl text-xl font-semibold mr-6">tags</h1>
                    <h1 className=" pl-2 pr-2 pb-1 pt-1 bg-[#e8ffe5] text-[#23BE0A] rounded-3xl text-xl font-semibold mr-6">tags</h1>
                </div>
                <h2 className="card-title font-bold text-2xl text-[#131313]">{estate_title}</h2>
                <p className="card-title text-[#131313cc] font-medium text-lg">By: {segment_name}</p>
                <hr className="mt-2 dashed" />
                <div className="flex justify-around mt-4">
                    <div>
                        <span className="text-[#131313cc] font-medium text-lg">{status}</span>
                    </div>
                    <div className="flex gap-3">
                        <p className="text-lg text-[#131313cc]">{price}</p>
                    </div>
                </div>
                <Link to={`/itemdetails/${id}`}><button className="btn w-full bg-violet-500 text-white">View Property</button></Link>
            </div>
        </div>
    );
};

export default Item;