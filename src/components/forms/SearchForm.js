import React, {useRef} from 'react'
import { Input } from 'antd'
import './Form.scss'

const SearchForm = ({onSearch}) => {
    const inputRef = useRef()

    const handleSearch = (value) => {
        inputRef.current.blur()
        const term = value.trim()
        if(term.length > 0) {
            onSearch(term);
        }
    };

    return (
        <div className="form-group" style={{maxWidth: '768px', margin: '1rem auto' }}>
            <Input.Search
                placeholder="Search for a video"
                enterButton="Search"
                size="large"
                ref={inputRef}
                onSearch={handleSearch}
            />
        </div>
    )
}

export default SearchForm
