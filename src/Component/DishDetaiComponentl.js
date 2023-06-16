import React from 'react';
import { Card, CardTitle, CardImg, CardImgOverlay, CardBody } from 'reactstrap';

const DishDetail = (props) => {
  const renderDish = (dish) => {
    if (dish != null)
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
            <CardBody>{dish.description}</CardBody>
          </CardImgOverlay>
        </Card>
      );
    else {
      return <div></div>;
    }
  };

  const renderComment = (comment) => {
    if (comment) {
      return (
        <div key={comment.id}>
          <p>{comment.comment}</p>
          <p>
            -- {comment.author},{' '}
            {new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'short',
              day: '2-digit'
            }).format(new Date(Date.parse(comment.date)))}
          </p>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  const dishItem = renderDish(props.dish);
  const commentItem = props.dish.comments.map((comment) => renderComment(comment));

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {dishItem}
          {commentItem}
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
