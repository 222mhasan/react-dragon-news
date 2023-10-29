import { useEffect, useState } from "react";
import { BsFillBookmarkStarFill, BsFillShareFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";



const CentralArea = () => {

    const [contents, setContents] = useState([]);
    useEffect(() => {
        fetch('news.json')
            .then((response) => response.json())
            .then(data => setContents(data))
    }, [])

    return (
        <div>
            <h2 className="font-poppins text-3xl">Dragon News Home</h2>
            {
                contents.map(content => <div key={content.id} className="border border-slate-800 p-3 mb-4 rounded-md">

                    {/* 1st part */}
                    <div className="flex justify-between bg-[#F3F3F3] px-5 py-3 rounded-md mb-3 items-center">
                        <div className="flex items-center gap-3">
                            <img className="w-10 rounded-full" src={content.author.img} alt="" />
                            <div>
                                <h3>{content.author.name}</h3>
                                <p>{content.author.published_date}</p>
                            </div>
                        </div>
                        <div className="flex gap-3 text-xl">
                            <BsFillBookmarkStarFill ></BsFillBookmarkStarFill>
                            <BsFillShareFill></BsFillShareFill>
                        </div>
                    </div>

                    {/* 2nd part */}
                    <div className="border-b-2 border-slate-400 pb-5">
                        <h2 className="text-xl font-semibold">{content.title}</h2>
                        <img className="my-3" src={content.image_url} alt="" />
                        <p>{content.details}</p>
                        <Link to={`/news/${content.category_id}`} className="text-orange-700 font-semibold mb-5">Read More</Link>
                    </div>

                    {/* 3rd part */}
                    <div className="flex justify-between mt-4">
                        <div className="">
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <p className="ml-3">{content.rating.number}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <AiFillEye className="text-2xl"></AiFillEye>
                            <p>{content.total_view}</p>
                        </div>
                    </div>

                </div>)
            }
        </div>
    );
};

export default CentralArea;