import React, {useState, useEffect}from "react";
import Spinner from 'react-bootstrap/Spinner'
import styles from "./ItemDetails.module.css";


const ItemDetails  = (props) => {

    const [item, setItem] = useState({loading: true});

    useEffect(()=>{
        fetchItem();
    },[]);

    const fetchItem = async () => {

        // Fetching the id from the URL params.
        // If we are using the Link component, then we will be able to see the URL params at props.match level.

        const id = props.match.params.id
        let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

        data = await data.json();

        setItem({
            title: data.title,
            body: data.body
        })


        // const URL = "https://developers.zomato.com/api/v2.1/categories";
        // let data = await fetch(URL,{
        //     headers: {
        //         "user-key": "431a5afa4e130c6ed37b185037c0aa76",
        //         "Accept": "application/json"
        //     }
        // });

        // data = await data.json();
        // console.log(data)

    }
    return(
        <div className={styles.itemDetail}>
            <h1 className={styles.itemTitle}>{item.title}</h1>
            <h3 className={styles.itemBody}>{item.body}</h3>
        </div>
    );
}

export default ItemDetails;
