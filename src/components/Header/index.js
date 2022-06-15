import React, {useContext} from "react";
import { Link } from "react-router-dom";
import RMDBLogo from '../../images/react-movie-logo.svg'
import TMDBLogo from '../../images/tmdb_logo.svg'
import FooterBG from '../../images/footer_bg.jpg'

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

//Context
import { Context } from "../../context";

const Header = () => {

    const[user] = useContext(Context);
    
    function refreshPage() {
        window.location.reload(false);
      }
    

    return (
        <Wrapper className='header' style={{backgroundImage:`url(${FooterBG})`}}>
            <Content>
                <Link to='/'>
                    <LogoImg src={RMDBLogo} alt='rmdb-logo' />
                </Link>
                <div className="menu">
                    {user ?  (
                        <div>
                            <button onClick={refreshPage}>Log Out</button>
                            <span className='loggedin'> Logged in as: {user.username}</span>
                        </div>
                       
                    ) : (
                        <Link to='/login'>
                            <button>Log in</button>
                        </Link>
                    )}
                    <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo'/>
                </div>
            </Content>
        </Wrapper>
    );
}

export default Header;