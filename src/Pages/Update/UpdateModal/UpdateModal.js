import * as React from 'react';
import Box from '@mui/material/Box';
import { useForm } from "react-hook-form";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function UpdateModal({setOpen, open, data}) {
    const {date, book, author, id} = data;
    const handleClose = () => setOpen(false);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch("http://localhost:5000/data", {
            method:"POST",
            headers:{
                "Content-type" : "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            reset();
        })
        
    };

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update Information
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <form className="modal-form" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("author")} defaultValue={id}  required/>
                <br />
                <input type="text" {...register("id")} defaultValue={author}  required/>
                <br />
                <input type="text" {...register("book")} defaultValue={book} required/>
                <br />
                <input type="text" {...register("date")} value={date} disabled required/>
                <br />
                <input type="submit" />
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
