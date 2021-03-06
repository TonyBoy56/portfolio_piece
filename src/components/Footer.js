import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';

function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Antonio Cruz
                    </Col>
                    <Col className="p-0 justify-content-end" md={3}>
                        This website was made by Antonio Cruz
                    </Col>
                    
                </Row>
            </Container>

        </footer>
    );
}

export default Footer;