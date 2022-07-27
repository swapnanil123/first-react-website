import './HomeHeader.css';

const HomeHeader = () => {
    return(
        <header className="homeheader">
            {/* <div className="header_Wrapper"> */}
                <div className="title">
                    {/* <img src="./../../images/background_img3.svg" alt="logo" width="40px" height="40px" /> */}
                    <span><strong>Question Finder</strong></span>
                </div>
                <div className="user">
                    <div className="user_icon">
                        {/* <img src="./../../images/icon.png" alt="icon" width="40px" height="40px"/> */}
                    </div>
                </div>
            {/* </div> */}
        </header>
    )
}

export default HomeHeader;