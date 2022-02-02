import React from 'react';
import './ReadData.css';

const ReadData = ({data}) => {
    const {date, book, author} = data;
    return (
        <div className="single-book">
            <h3>Author: {author}</h3>
            <h4>Book: {book}</h4>
            <p>Published date: {date} </p>
        </div>
    );
};

export default ReadData;