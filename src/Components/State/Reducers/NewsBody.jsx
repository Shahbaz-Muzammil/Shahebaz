import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Row,Col,Card,Button } from "react-bootstrap";
import "./newsbody.css";

const NewsBody = () => {
  const [proData, setProData] = useState([]);
  const finalResult = useSelector((state) => state.NewsReducer.newData);
  useEffect(() => {
    setProData(finalResult);
  }, [finalResult]);

  return (
    <div className="newsdiv">
      <Row>
      {proData.map((item) => {
        return(
        <Col> <Card ig="800" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.Image}/>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.discription}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> </Col>)
      })}
      </Row>
    </div>
  );
};

export default NewsBody;
