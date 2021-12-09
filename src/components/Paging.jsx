import React, {useState} from 'react';
import Pagination from 'react-js-pagination';

export default function Paging({page, handlePageChange} ) {
    



    return (
        <Pagination
            activePage={page}
            itemsCountPerPage={5}
            totalItemsCount={450}
            pageRangeDisplayed={5}
            prevPageText={"<"}
            nextPageText={">"}
            onChange={handlePageChange}        
        />


    );

    
}