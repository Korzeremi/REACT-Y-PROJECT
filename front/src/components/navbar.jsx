import '../styles/navbar.scss';
import homeBtn from '../assets/home.png';
import newBtn from '../assets/new.png';
import notifBtn from '../assets/notif.png'
import searchBtn from '../assets/search.png'
import userBtn from '../assets/user.png'

export default function Nav() {
    return (
        <div className="nav-sct">
            <div className="y-logo">
                <p className='y-sct'>Y</p>
            </div>
            <div className="nav-btn-sct">
                <div className="home-btn">
                    <img src={homeBtn} alt="" id='btnImg'/>
                </div>
                <div className="search-btn">
                    <img src={searchBtn} alt="" id='btnImg'/>
                </div>
                <div className="notif-btn">
                    <img src={notifBtn} alt="" id='btnImg'/>
                </div>
                <div className="user-btn">
                    <img src={userBtn} alt="" id='btnImg'/>
                </div>
                <div className="new-article-btn">
                    <img src={newBtn} alt="" id='btnImg'/>
                </div>
            </div>
            <div className="y-profile"></div>
        </div>
    )
}