import * as React from 'react';
import { Button } from '@mui/material';
import UpdateModal from '../UpdateModal/UpdateModal';

const UpdateData = ({data}) => {
    const {date, book, author} = data;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    return (
        <div className="single-book">
            <h3>Author: {author}</h3>
            <h4>Book: {book}</h4>
            <p>Published date: {date} </p>
            <Button className="button-design" onClick={handleOpen}> Update</Button>
            <UpdateModal 
            open={open}
            setOpen={setOpen}
            data={data}
            />
        </div>
    );
};

export default UpdateData;