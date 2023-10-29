import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex border p-2 bg-[#F3F3F3] rounded-md">
            <button className="btn btn-secondary">Latest</button>
            <Marquee className="cursor-pointer" pauseOnHover={true} speed={100}>
                <Link className="mr-10" to="/">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link className="mr-10" to="/">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link className="mr-10" to="/">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;