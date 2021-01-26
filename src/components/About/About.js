import React , {useState, useEffect}from "react";
import {Link} from "react-router-dom";
import styles from "./About.module.css";

const About = () => {


    // Using useState hook to set the empty items array.
    const [items, setItems] = useState([]);



    // Passing an empty object makes it to behave as of componentDidMount lifecycle method.
    useEffect(()=>{
        fetchItems()
    },[]);


    const fetchItems = async () => {
        let data = await fetch('https://jsonplaceholder.typicode.com/posts');

        // Convert the above data to the JSON.
        data = await data.json();

        // Setting the items to the actual API Response.
        setItems(data)
    }

    return(
        <div>
            {items.map((item, idx)=>(
                <h3><Link key={idx} className={styles.title} to={`/shop/${item.id}`}>{item.title}</Link></h3>
                // <h3 key={idx} className={styles.title}>{item.title}</h3>
            ))}
        </div>
    );
}

export default About;
