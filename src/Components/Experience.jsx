import React from 'react'
import styled from 'styled-components';
import { experiences } from '../data/constants';
import ExperienceCard from './Cards/ExperienceCard';
import {VerticalTimeline} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import StarCanvas from './Canvas/Stars';
const Container = styled.div`
display:flex;
flex-direction:coloun;
justify-content:center;
margin-top:50px;
position:relative;
z-index:1;
align-items:center;
`
const Wrapper = styled.div`
position:relative;
display:flex;
justify-content:space-between;
align-items:center;
flex-direction:column;
width:100%;
max-width:1100px;
gap:12px;
@media(max-width:960px){
flex-direction:column;}
`;
const Title = styled.div`
font-size:53px;
text-align:center;
font-weight:600;
margin-top:20px;
color${({ theme }) => theme.text_primary};
@media(max-width:768px){
margin-top:12px;
font-size:32px;
}
`;
const Desc = styled.div`
font-size:18px;
text-align:center;
font-weight:600;
color${({ theme }) => theme.text_secondary};
@media(max-width:768px){
font-size:16px;
}
`;
const Experience = () => {
    return (
        <Container id="Experiences">
            <StarCanvas/>
            <Wrapper>
                <Title>
                    Experience
                </Title>
                <Desc style={{
                    marginBottom: "40px"
                }}>
                    Currentl a Btech Engineering Student and  a Executive Member of the Elsoc Society
                </Desc>
                <VerticalTimeline>
                    {experiences.map((experience, index) => {
                        return (
                            <ExperienceCard  experience={experience}/>
                        )
                    })}
                </VerticalTimeline>
            </Wrapper>
        </Container>
    )
}

export default Experience
