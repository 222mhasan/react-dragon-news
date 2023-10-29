import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <div className="mx-auto w-fit">
                <img className="w-96 md:w-[471px] h-14 mt-12 mb-3" src={logo} alt="img" />
                <div className='text-center'>
                    <h2 className="font-poppins text-xl">Journalism Without Fear or Favour</h2>
                    <p className="text-lg font-semibold mb-4">{moment().format("dddd, MMMM D, YYYY")}</p>
                </div>
            </div>
        </div>
    );
};

export default Header;