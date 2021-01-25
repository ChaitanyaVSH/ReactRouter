import React , {useState, useEffect}from "react";
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
            <h1>This is the shop page</h1>
        </div>
    );
}

export default About;
