import React from 'react';
import { data } from "../shared/bookdata";


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

function Book(props) {
  return (
    <div className="container-fluid" style={{backgroundColor:'gray'}}>
      <div className="row">

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

export default Book;

