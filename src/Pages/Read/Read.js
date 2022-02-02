import React, { useState, useEffect } from 'react';
import './Read.css';
import ReadData from './ReadData/ReadData';

const Read = () => {
    const [dataInfo, setDataInfo] = useState([]);
    console.log(dataInfo);

    useEffect(()=>{
        fetch("http://localhost:5000/data")
        .then(res => res.json())
        .then(data => setDataInfo(data.Items))
    },[setDataInfo]);
    return (
        <div>
            <h1>This Is read page</h1>
            <div className="all-book">
                {
                    dataInfo.map(data => <ReadData
                    key={data.id} 
                    data={data}
                    />)
                }
            </div>
        </div>
    );
};

export default Read;