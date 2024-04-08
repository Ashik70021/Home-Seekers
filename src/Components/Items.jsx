import { useEffect, useState } from "react";
import Item from "./Item";

const Items = () => {
    const [items, setItems] = useState([]);
    

    useEffect(() =>{
        fetch('Residential.json')
        .then(res => res.json())
        .then(data =>setItems(data))
    }, [])

    return (
        <div>
            <h2></h2>
            <div className="md:grid md:grid-cols-3 gap-8 mt-16">
                {
                    items.map(item => <Item
                        key={item.id}
                        item ={item}>
                    </Item> )
                }
            </div>
        </div>
    );
};

export default Items;