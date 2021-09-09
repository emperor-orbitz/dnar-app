import React, { ReactElement } from 'react';
import './style.scss';

import { AiOutlineSearch } from "react-icons/ai";


function Search(): ReactElement {

    return (
        <header>
            <div className='search-box' placeholder='Search your coins' title="search">
                <AiOutlineSearch size={22} color='#3f6eff' style={{ width: '5%', marginRight:'5%', verticalAlign: 'middle' }} />
                <input name="search" placeholder='Search for your coins' title='Search' />
            </div>
        </header>

    );
}

export default Search;
