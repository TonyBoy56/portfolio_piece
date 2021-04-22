import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import { propTypes } from 'react-bootstrap/esm/Image';
function ContactPage(props) {
    return (
        <div>
            <Hero title={props.title} />

            <Content>
                
            </Content>
        </div>
    );
}

export default ContactPage;