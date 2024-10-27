import React from 'react'
import styled from 'styled-components';
import { education } from '../data/constants';
import EducationCard from './Cards/EducationCard';
import {VerticalTimeline} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import StarCanvas from './Canvas/Stars';
const Container = styled.div`
display:flex;
flex-direction:coloumn;
justify-content:center;
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
const Education = () => {
    return (
        <Container id="Education">
            <StarCanvas/>
            <Wrapper>
                <Title>
                    Education
                </Title>
                <Desc style={{
                    marginBottom: "40px"
                }}>
                    My Education has been a Journey Of Self Discouvery. My educations Details are As follows
                     </Desc>
                <VerticalTimeline>
                    {education.map((item, index) => {
                        return (
                            <EducationCard key={`education-${index}`} education={item}/>
                        )
                    })}
                </VerticalTimeline>
            </Wrapper>
        </Container>
    )
}

export default Education
