import React from 'react'
import { Input } from 'antd'
import './Form.scss'

const SearchForm = ({onSearch}) => {
    const handleSearch = (value) => {
        if(value.trim().length > 0) {
            onSearch(value.trim());
        }
    };

    return (
        <div className="form-group" style={{maxWidth: '768px', margin: '1rem auto' }}>
            <Input.Search
                placeholder="input search text"
                enterButton="Search"
                size="large"
                onSearch={handleSearch}
            />
        </div>
    )
}

export default SearchForm
