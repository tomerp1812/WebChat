import { useRef } from "react";

function Search({ doSearch }) {

    const searchBox = useRef(null);
    const search = function () {
        doSearch(searchBox.current.value);
    }

    return (
        //<!--search text-->
        <div id="search">
            <label htmlFor=""><i className="fa fa-search" aria-hidden="true"></i></label>
            <input ref={searchBox} onKeyUp={search} type="text" placeholder="Search contacts..." />
        </div>
    );
}

export default Search;