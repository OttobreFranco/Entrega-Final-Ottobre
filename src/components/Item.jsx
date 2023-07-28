import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom'

export const Item = ({ car }) => {
  return (

      <Card 
      style={{ width: "18rem" }}
      key={car.id}
      className="float-start">
        <Card.Img variant="top" src={car.img} />
        <Card.Body>
          <Card.Title>{car.car_model}</Card.Title>
          <Card.Text>
            Categoría : {car.category}
          </Card.Text>
          <Link to={`/item/${car.id}`}>
          <Button variant="primary">Go somewhere</Button>
          </Link>
        </Card.Body>
      </Card>
  );
};
