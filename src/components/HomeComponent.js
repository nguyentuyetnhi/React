import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { data } from "../shared/bookdata";
import { Form, Input, Label, Button } from 'reactstrap';

function RenderCard({ item }) {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return (
<div className="khung">
  <div className="phan" style={{ }}>
    <div className="row">
    <div className="ngay">
  <div style={{ }}>
  <p style={{ }}>{months[item.date.getMonth()]} </p>
  <p style={{ marginTop:'-17px'  }}>{item.date.getFullYear()}</p>
<p style={{ marginTop:'-20px', fontWeight:'bold',fontSize:' larger' }}>{item.date.getDate()}</p>

  </div>
</div>

      <div className="ten">
        <h5>{item.title}</h5>
      </div>
      <div className="col-12  d-flex justify-content-end">
  <div style={{ backgroundColor:'black',borderRadius:'10px',border:'2px solid white',marginTop:'-70px',width:'70px',height:'40px',textAlign:'center',fontWeight:'bold'}}>
    <p>{item.amount}</p>
  </div>
</div>

    </div>
  </div>
</div>
  );
}

function Home(props) {
  return (
    <div className="container-fluid" style={{backgroundColor:'gray'}}>
      <div className="row">
        <div className='container rounded mt-5' style={{ backgroundColor: "#918fc0" , borderRadius:'50px' }}>
          <Form className='row container' >
            <div className='col-sm-6' style={{ paddingTop: '30px', fontWeight: 'bold' }}>
              <Label htmlFor="">Book title:</Label>
              <Input type="text" id="title" name="title" />
            </div>
            <div className='col-sm-6' style={{ paddingTop: '30px', fontWeight: 'bold' }}>
              <Label htmlFor="username">Price:</Label>
              <Input type="text" id="Price" name="username" />
            </div>
            <div className='col-sm-6' style={{ paddingTop: '10px', fontWeight: 'bold' }}>
              <Label htmlFor="date">Published Date:</Label>
              <Input type="text" id="date" name="date" />
            </div>
            <div className='col-12 col-md-6'></div>
            <div className='nut'>
              <Button className='col-12 md-3' style={{ backgroundColor: "#020083" }} type="reset" value="submit">Cancel</Button>
              <Button className='col-12 md-3' style={{ backgroundColor: "#020083" }} type="submit" value="submit" color="primary">Add new book</Button>
            </div>
          </Form>
        </div>
      </div>

      <div className="col-12">
        <RenderCard item={data[0]} />
      </div>
      <div className="col-12">
        <RenderCard item={data[1]} />
      </div>
      <div className="col-12">
        <RenderCard item={data[2]} />
      </div>
      <div className="col-12">
        <RenderCard item={data[3]} />
      </div>
    </div>
  );
}

export default Home;

