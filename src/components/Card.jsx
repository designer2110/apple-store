import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComp() {
  return (
    <Card style={{ width: '18rem' }} className="hover-shadow">
      <Card.Img variant="top" src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComp;