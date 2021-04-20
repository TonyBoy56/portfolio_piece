import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import Card from '../components/Card';

import image1 from '../assets/images/image1.jpeg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';



class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Image1',
                    subTitle: 'This is a thing that does stuff',
                    imgSrc: image1,
                    link: 'Insert Link Here',
                    selected: false
                },
                {
                    id: 0,
                    title: 'Image2',
                    subTitle: 'This is a thing that does stuff',
                    imgSrc: image2,
                    link: 'Insert Link Here',
                    selected: false
                },
                {
                    id: 0,
                    title: 'Image3',
                    subTitle: 'This is a thing that does stuff',
                    imgSrc: image3,
                    link: 'Insert Link Here',
                    selected: false
                },
            ]
        }
    }  

    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        
        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        });
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;
