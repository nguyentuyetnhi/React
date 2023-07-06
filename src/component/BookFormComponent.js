import React, { useState } from 'react';
import { Button, Form, Input, Label } from 'reactstrap';


const InputBook = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
   
  

    // Create a new book object from user input
    
/* const handleOnSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      id: uuidv4(),
      title: book.title,
      amount: parseFloat(book.amount),
      date: new Date(book.date)
    };
    setBooks([...books, newBook]);
    setBook({
      title: '',
      amount: '',
      date: ''
    });
  };
  
    */
   
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: 'gray', paddingTop: '20px', paddingBottom: '20px' }}>
      <div className='container rounded mt-5' style={{ backgroundColor: "#918fc0", borderRadius: '50px' }}>
        <Form className='row container' onSubmit={handleSubmit}>
          <div className='col-sm-6' style={{ paddingTop: '30px', fontWeight: 'bold' }}>
            <Label htmlFor="title">Book title:</Label>
            <Input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className='col-sm-6' style={{ paddingTop: '30px', fontWeight: 'bold' }}>
            <Label htmlFor="price">Price:</Label>
            <Input type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>
          <div className='col-sm-6' style={{ paddingTop: '10px', fontWeight: 'bold' }}>
            <Label htmlFor="date">Published Date:</Label>
            <Input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div className='col-12 col-md-6'></div>
          <div className='nut'>
            <Button className='col-12 md-3' style={{ backgroundColor: "#020083" }} type="reset" value="submit">Cancel</Button>
            <Button className='col-12 md-3' style={{ backgroundColor: "#020083" }} type="submit" value="submit" color="primary">Add new book</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default InputBook;
