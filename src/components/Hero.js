import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Hero(props) {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        { props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1>}
                        { props.subTitle && <h1 className="display-4 font-weight-light">{props.subTitle}</h1>}
                        { props.text && <h1 className="lead font-weight-light">{props.text}</h1>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;