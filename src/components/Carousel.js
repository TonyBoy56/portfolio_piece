import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

// import images
import Card from '../components/Card';


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'PlaceHolder',
                    subTitle: 'This is a thing that does stuff',
                    imgSrc: "devgrub",
                    link: '',
                    selected: false
                },
                {
                    id: 0,
                    title: 'PlaceHolder',
                    subTitle: 'This is a thing that does stuff',
                    imgSrc: "devgrub",
                    link: '',
                    selected: false
                },
                {
                    id: 0,
                    title: 'PlaceHolder',
                    subTitle: 'This is a thing that does stuff',
                    imgSrc: "devgrub",
                    link: '',
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
            return <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id} />
        });
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">

                </Row>
            </Container>
        );
    }
}

export default Carousel;
