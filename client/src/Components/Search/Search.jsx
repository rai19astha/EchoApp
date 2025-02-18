import './Search.css';
import userlogo from './User-logo.png';

import logo from './logo1.png';
const Search = () => {
    return (
        <>
            <div className="Search-page">
                <div className="Navbar">
                    <div>
                        <div>
                            <img src={logo} alt="" />
                        </div>
                        <div className="Heading-top">Echo</div>
                    </div>
                    <div className="User-img">
                        <img src={userlogo} alt="" />
                    </div>
                </div>
                <div className="Logo-section">
                    <img src={logo} alt="" />
                </div>
                <div className="Search-bar">
                    <form action="">
                        <input type="text" placeholder="Type something..." />
                    </form>
                </div>
            </div>
        </>
    );
};
export default Search;
