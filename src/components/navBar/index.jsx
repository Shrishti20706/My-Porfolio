import {React ,useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {HiX} from 'react-icons/hi';
import './styles.scss';
import {TbHexagonLetterS} from 'react-icons/tb';


const data=[
    {
        label:'HOME',
        to:'/'
    },
    {
        label:'ABOUT',
        to:'/about'
    },
    {
        label:'SKILLS',
        to:'/skills'
    },
    {
        label:'RESUME',
        to:'/resume'
    },
    {
        label:'PROJECTS',
        to:'/portfolio'
    },
    {
        label:'CONTACT',
        to:'/contact'
    }
]

const Navbar=()=>{
    const[toggleIcon,setToggleIcon]=useState(false);
    const handleToggleIcon=()=>{
        setToggleIcon(!toggleIcon);
    }
    return(
        <div>
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to={'/'} className='navbar__container__logo'>
                
                    <TbHexagonLetterS size={50}></TbHexagonLetterS>
                    </Link>

                </div>
                <ul className={`navbar__container__menu ${toggleIcon?"active":""}`}>
                    {
                        data.map((item,key)=>(
                            <li key={key}className="navbar__container__menu__item">
                                <Link className="navbar__container__menu__item__links" to={item.to}>
                                    {item.label}
                                </Link>

                            </li>
                        ))
                    }

                </ul>
                <div className="nav-icon" onClick={handleToggleIcon}>
                    {
                        toggleIcon?<HiX size={30}/>: <FaBars size={30}/>
                    }

                </div>

            </nav>
        </div>
    )
}

export default Navbar;