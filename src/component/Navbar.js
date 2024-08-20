import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];
    return <div className="header">
        <div className="nav-header">
            <div className="login-button">
                <FontAwesomeIcon icon={faUser}/>
                <span style={{marginLeft:"10px"}}>로그인</span>
            </div>
        </div>
        <div className="nav-section">
            <img width={100}
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXpRqYm8ZV9DX0FdTQzy6Lpcm6GMKfBbNO7Q&s"
                 alt="logo"/>
        </div>
        <div className="menu-area">
            <ul className="menu-list">
                {menuList.map((menu, index) => <li key={index}>{menu}</li>)}
            </ul>
            <div className="menu-search">
                <FontAwesomeIcon icon={faSearch} />
                <input type='text' placeholder='제품검색'/>
            </div>
        </div>
    </div>
};

export default Navbar;