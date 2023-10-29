import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(response => response.json())
            .then(data => setCategories(data))
    }, [])

    useEffect(() => {
        fetch('news.json')
            .then(response => response.json())
            .then(data => setNews(data))
    }, [])

    return (
        <div >
            <div className="space-y-4 border border-black p-3 rounded-md">
                <h2 className="text-xl font-semibold">All category</h2>
                {
                    categories.map(category => <NavLink
                        className="block ml-4 text-lg font-semibold"
                        key={category.id}
                        to={`/category/${category.id}`}>
                        {category.name}
                    </NavLink>)
                }
            </div>

            <div className="mt-8 space-y-4">
                {
                    news.slice(0, 4).map((item) => <div key={item.category_id}>
                        <img className="w-64 h-40" src={item.image_url} alt="" />
                        <h2 className="text-md font-semibold">{item.title}</h2>
                        <div>
                            <h2>Sports</h2>
                            
                        </div>

                    </div>)
                }

            </div>

        </div>
    );
};

export default LeftSideNav;