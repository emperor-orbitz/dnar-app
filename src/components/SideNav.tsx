import React, { ReactElement } from 'react';
import '../styles/App.scss';
import { AiOutlineMenu, AiFillLayout, AiFillSignal, AiTwotoneSetting } from "react-icons/ai";
import { Link } from 'react-router-dom';

function SideNav(props: any): ReactElement {
    const toggleRef = React.useRef<HTMLDivElement>(null);

    function ontoggle(): void {
        const wrapper = toggleRef.current;
        wrapper?.classList.toggle('increase');
    }



    return (

        <nav className="nav">
            <div>
                <div className="toggle" onClick={ontoggle}>
                    <AiOutlineMenu style={{ color: '#3f6eff', width: '20px', height: '20px' }} />
                </div>
                <div className="container" ref={toggleRef}>
                    <ul>
                        <li style={{ padding: '15px'}}>
                            <Link to='/'>
                                <AiFillLayout size={18} style={{ color: 'white' }} />
                                <span className='menu-text'>My Dashboard</span>
                            </Link>

                        </li>
                        <li style={{ padding: '15px' }}>
                            <AiFillSignal size={18} style={{ color: 'white' }} />
                            <span className='menu-text'>Highligths</span>
                        </li>

                        <li style={{ padding: '15px' }}>
                            <AiTwotoneSetting size={18} />
                            <span className='menu-text' >Settings</span>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>



    );
}

export default React.memo(SideNav);
