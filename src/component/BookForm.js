import React, { useState } from 'react';
import {  Input, Label } from 'reactstrap';
function BookForm({ onAddBook }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBook = {
      id: Date.now().toString(),
      title,
      amount,
      date: new Date(date),
    };

    onAddBook(newBook);

    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: 'gray', paddingTop: '20px', paddingBottom: '20px' }}>
      <div className='container rounded mt-5' style={{ backgroundColor: "#918fc0" ,padding:'50px',borderRadius: '20px',}}>
    <form  className='row container form' onSubmit={handleSubmit }>
    <div className='col-sm-6' style={{ paddingTop: '30px', fontWeight: 'bold' }}>
   < Label htmlFor="title">Book title:</Label>
   <Input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div className='col-sm-6' style={{ paddingTop: '30px', fontWeight: 'bold' }}>
      <Label htmlFor="title">Price:</Label>
      <Input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
</div>
<div className='col-sm-6' style={{ paddingTop: '30px', fontWeight: 'bold' }}>
<Label htmlFor="title">Published Date:</Label>
<Input  type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
     </div>
     <div className='col-12  d-flex justify-content-end ,'>
      <button className='nut' style={{ backgroundColor: "#020083" , borderRadius:'10px'}} type="submit">Cencel</button>
      <button className='nut' style={{ backgroundColor: "#020083", borderRadius:'10px' }}type="submit">Add Book</button>
      </div>
    
    </form>
    </div>
    </div>
  );
}

export default BookForm;
