import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

const Navbar = ({authenticate, setAuthenticate}) => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login');
    };
    const goToHome = () => {
        navigate('/');
    }

    const search = (event) => {
        if (event.key === 'Enter') {
            const keyword = event.target.value;
            navigate(`/?q=${keyword}`);

        }
    }
    return <div className="header">
        <div className="nav-header">
            <div className="login-button" onClick={goToLogin}>
                <FontAwesomeIcon icon={faUser}/>
                {authenticate ? <span style={{marginLeft: "10px"}} onClick={() => {
                        setAuthenticate(false);
                    }}>로그아웃</span> :
                    <span style={{marginLeft: "10px"}}>로그인</span>}
            </div>
        </div>
        <div className="nav-section">
            <img width={100}
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXpRqYm8ZV9DX0FdTQzy6Lpcm6GMKfBbNO7Q&s"
                 alt="logo"
                 onClick={goToHome}
                 style={{cursor: 'pointer'}}/>
        </div>
        <div className="menu-area">
            <ul className="menu-list">
                {menuList.map((menu, index) => <li key={index}>{menu}</li>)}
            </ul>
            <div className="menu-search">
                <FontAwesomeIcon icon={faSearch}/>
                <input type='text' placeholder='제품검색' onKeyDown={(event) => search(event)}/>
            </div>
        </div>
    </div>
};

export default Navbar;