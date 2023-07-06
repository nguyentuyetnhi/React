import React from 'react';

function Book({ title, amount, date }) {
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className='khung'>
      <div className="phan">
        <div className="ten">
          <h3>{title}</h3>
        </div>
        <div className="col-12  d-flex justify-content-end">
          <div style={{ backgroundColor: 'black', borderRadius: '10px', border: '2px solid white', marginTop: '-30px', width: '70px', height: '40px', textAlign: 'center', fontWeight: 'bold' }}>
            <p>{amount}</p>
          </div>
        </div>
        <div className="col-12  d-flex justify-content-start">
          <p style={{ backgroundColor: 'black', borderRadius: '10px', border: '2px solid white',  fontSize: 'larger', padding: '10px',textAlign:'center',fontWeight:'bold' }}>
            {formattedDate.split(' ').map((part, index) => (
              <React.Fragment key={index}>
                {part}
                <br />
              </React.Fragment>
              
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Book;
