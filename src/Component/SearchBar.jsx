import { Divider, Input } from 'antd';

// Iteration 5
function SearchBar({search, setSearch}) {

    
    return (
        <>
        <Divider>Search</Divider>

        <label>Search</label>
        <Input value={search} type="text" onChange={(event) => {
            setSearch(event.target.value)
            
            }} />
        </>
    );
}

export default SearchBar;
