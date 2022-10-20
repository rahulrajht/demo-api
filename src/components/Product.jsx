import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Product({img ,title}) {
  return (
    <Card className='product-card' style={{ width: '18rem' , height:"500px"}}>
      <Card.Img  height={150} variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At possimus nemo culpa sint id modi libero qui quae itaque tenetur? Distinctio quidem doloribus, velit quibusdam nihil eos dicta optio perferendis.
        </Card.Text>
      </Card.Body>
     
      <Card.Body  className='text-center'>
        <Card.Link  href="#">View product</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Product;