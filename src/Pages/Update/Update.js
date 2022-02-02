import React, { useState, useEffect } from 'react';
import UpdateData from './UpdateData/UpdateData';

const Update = () => {
    const [dataInfo, setDataInfo] = useState([]);
    console.log(dataInfo);

    useEffect(()=>{
        fetch("http://localhost:5000/data")
        .then(res => res.json())
        .then(data => setDataInfo(data.Items))
    },[setDataInfo]);
    return (
        <div>
            <h1>This Is Update page</h1>
            <div className="all-book">
                {
                    dataInfo.map(data => <UpdateData
                    key={data.id} 
                    data={data}
                    />)
                }
            </div>
        </div>
    );
};

export default Update;