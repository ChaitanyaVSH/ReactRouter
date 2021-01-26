import React, {useState, useEffect} from "react";
import styles from "./Categories.module.css";

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetchCatgories();
    }, []);

    const fetchCatgories = async () => {

        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        // FETCH method cheat sheet
        const URL = `https://developers.zomato.com/api/v2.1/categories`;

        let categories = await fetch(URL, {
            method: "GET",
            mode: "cors",
            headers: {
                "user-key":"431a5afa4e130c6ed37b185037c0aa76",
                "Accept":"application/json"
            }
        });

        categories = await categories.json();
        categories = categories.categories

        setCategories(categories)

    };

    return(
        <div className={styles.categoriesContainer}>
            <h1 className={styles.categoriesTitle}>Categories by Zomato</h1>
            {categories.map((category)=>(
                <h3 key={category.categories.id} className={styles.categoryName}>{category.categories.name}</h3>
            ))}
            <div className={styles.widgetwrap}><iframe src="https://www.zomato.com/widgets/res_search_widget.php?entity_id=11613&entity_type=city&city_id=11613&language_id=1&theme=red&widgetType=small&sort=rating"></iframe></div>
        </div>
    );
}

export default Categories;
