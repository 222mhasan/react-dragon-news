import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
import bg from '../../../assets/bg.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="">

                {/* Login */}
                <div className="space-y-3 p-3">
                    <h2 className="text-xl font-semibold">Login With</h2>

                    <button className="btn btn-outline w-full">
                        <FcGoogle></FcGoogle>
                        Login With Google
                    </button>

                    <button className="btn btn-outline w-full">
                        <BsGithub></BsGithub>
                        Login With Github
                    </button>
                </div>

                {/* Find Us On */}
                <div className="p-3 mt-3 ">
                    <h2 className="text-xl font-semibold">Find Us On</h2>

                    <a className="flex gap-2 items-center  border border-black rounded-t-md p-3" href="">
                        <BsFacebook></BsFacebook>
                        <span>Facebook</span>
                    </a>
                    <a className="flex gap-2 items-center border-black border-x p-3" href="">
                        <BsTwitter></BsTwitter>
                        Twitter
                    </a>
                    <a className="flex gap-2 items-center border border-black rounded-b-md p-3" href="">
                        <BsInstagram></BsInstagram>
                        Instagram
                    </a>
                </div>

                {/* Q-Zone */}
                <div className="p-3 mt-3 ">
                    <h2 className="text-xl font-semibold">Q-Zone</h2>

                    <img src={qZone1} alt="" />
                    <img src={qZone2} alt="" />
                    <img src={qZone3} alt="" />
                </div>

                {/* Advertisement  */}
                <div className=" mt-3 w-full">
                    <div className="hero h-[450px]"
                        style={{
                            backgroundImage: 'url(https://i.ibb.co/vLwZ5fK/bg.png)',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-2xl font-bold">Create an Amazing Newspaper</h1>
                                <p className="mb-5">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                                <button className="btn btn-secondary">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default RightSideNav;