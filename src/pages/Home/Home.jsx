import Header from '../Shared/Header/Header'
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav'
import Navbar from '../Shared/Navbar/Navbar'
import BreakingNews from './BreakingNews';
import CentralArea from '../Shared/CentralArea/CentralArea';

const Home = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className='border-2'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='md:col-span-2 border-2'>
                    <CentralArea></CentralArea>
                </div>
                <div className='border-2'>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;