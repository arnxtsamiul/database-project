import { CircularProgress } from '@mui/material';
import React, { useState, useEffect } from 'react';
import './Read.css';
import ReadData from './ReadData/ReadData';

const Read = () => {
    const [dataInfo, setDataInfo] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        fetch("http://localhost:5000/data")
        .then(res => res.json())
        .then(data => setDataInfo(data.Items))
        setLoading(false);
    },[setDataInfo]);
    return (
        <div>
            <h1>This Is read page</h1>
            {loading && <CircularProgress color="secondary" />}
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