import react, {useState} form 'react';

import React, {useState} from 'react';

export default function SearchForm ({onSearch})
    const [query, setQuery] = useState ({
        name:''
    });

    const handleInputChange = event => {
        setQuery({...query, name: event.targe.value});
    };

    const handleSearch = event => {
        event.preventDefault();
        onSearch(query);
    }

    return (
        <section className= "search-form ui container">
            <form onSubmit = {handleSearch} className= 'ui grid'>
                <input 
                    type='text'
                    onChange={handleInputChange}
                    value={query.name}
                    name='name'
                    tabIndex='0'
                    className='search'
                    placeholder='search by name'
                    autocomplete='off'
                />

            </form>
        </section>
        );
    }