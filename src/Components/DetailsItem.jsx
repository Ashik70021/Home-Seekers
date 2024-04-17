import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import 'animate.css';

const DetailsItem = () => {
    const items = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);
    const item = items.find(item => item.id === intId);

    console.log(item)
    console.log(id)


    return (
        <div className="animate__backOutRight mt-16 text-lg mx-auto max-w-lg pt-6 pb-6 pl-4 pr-6 shadow-md border border-violet-500 rounded-xl dark:bg-gray-50 dark:text-gray-800">
            <Helmet>
                <title>Home Seekers | Details</title>
            </Helmet>
            <div className="flex justify-between pb-4 border-bottom">
                <div className="flex items-center text-2xl font-bold">
                    <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800">{item.segment_name}</a>
                </div>
                <p className="text-xl font-semibold border pt-0 pb-0 pl-2 pr-2 rounded-lg bg-violet-500 text-white">{item.status}</p>
            </div>
            <div className="space-y-4">
                <div className="space-y-2">
                    <img src={item.img} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                </div>
                <div className="flex justify-between text-xl">
                    <p>Price : {item.price}</p>
                    <p>Area : {item.area}</p>  
                </div>
                <div className="mt-">
                    <a rel="noopener noreferrer" href="#" className="block">
                        <h3 className="text-3xl font-bold dark:text-violet-600">{item.estate_title}</h3>
                    </a>
                    <p className="mt-8 text-xl leading-snug dark:text-gray-600">{item.description}</p>
                </div>
                <div className="mt-6">
                    <p className="text-xl font-bold">Facilities</p>
                    <ul className="list-disc ml-8 text-xl">
                        {
                            item.facilities.map(facility => <>
                                <li>{facility}</li>
                            </>)
                        }
                    </ul>
                </div>
                <div className="text-xl font-semibold">
                    <p>Location: <span className="">{item.location}</span></p>
                </div>
            </div>
            <button className="mt-6 btn w-full bg-violet-500 text-white text-2xl">Book Now</button>
        </div>
    );
};

export default DetailsItem;