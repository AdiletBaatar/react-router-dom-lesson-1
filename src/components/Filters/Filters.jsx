import React, { useState } from 'react';

const Filters = () => {
    const [selectedTag, setSelectedTag ] = useState("all");
    return (
        <div>
            <div className='container mt-3 mb-3
            justify-content-between'
            >
                <div>
                   <span onClick={()=>setSelectedTag('all')} className={selectedTag === 'all' ? "btn btn-dark": 'btn btn-light'}>All</span>
                   <span onClick={()=>setSelectedTag('man')} className={selectedTag === 'all' ? "btn btn-dark": 'btn btn-light'}>Man</span>
                   <span onClick={()=>setSelectedTag('woman')} className={selectedTag === 'all' ? "btn btn-dark": 'btn btn-light'}>Woman</span>
                   <span onClick={()=>setSelectedTag('kids')} className={selectedTag === 'all' ? "btn btn-dark": 'btn btn-light'}>Kids</span>
                </div>
                <input type="text" placeholder='Search' />
            </div>
        </div>
    );
};

export default Filters;