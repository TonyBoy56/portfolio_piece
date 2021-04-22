import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} />

            <Content>
                <h3>Antonio Cruz</h3>
                
                <p>I am an ambitious developer who places a strong emphasis on internal customer service and producing measurable results. I take strong initiative and I have demonstrable experience in breaking down complex problems to help identify manageable and pragmatic solutions.</p> 
            
                <p>I have been recognized by management and peers for my strong work ethic and focus on customer service and results. I am eager to apply my interpersonal and technical problem solving skills with the experience and time spent at Epicodus utilizing JavaScript, C#, Ruby on Rails, React and relational databases in collaboration with my peers to help your organization meet their goals!</p>   
            </Content>
        </div>
    );
}

export default AboutPage;