import React from 'react'
import styled from 'styled-components'
import {VerticalTimelineElement} from "react-vertical-timeline-component"


const Top=styled.div`
width:100%;
display:flex;
max-width:100%;
gap:12px;


`;
const Body=styled.div`
width:100%;
display:flex;
flex-direction:column;
`;
const Image=styled.img`
height:50px;
border-radius:10px;
margin-top:4px;
@media(max-width:760px){
height:40px;}`;
const Role=styled.div`
font-size:16px;
font-weight:600;
color:${({theme})=>theme.text_primary+99};
`;
const Company=styled.div`
font-size:14px;
font-weight:500;
color:${({theme})=>theme.text_primary+99};
@media(mxax-width:760px){
font-size:12px;}
`;
const Date=styled.div`font-size:12px;
font-weight:400;
color:${({theme})=>theme.text_primary+80};
@media(mxax-width:760px){
font-size:10px;}`;
const ExperienceCard = ({experience}) => {
  return (
    <VerticalTimelineElement 
    icon={<img
        width="100%"
        height="100%"
        alt={experience?.compant} 
        style={{ borderRadius: "50%", objectFit: "cover" }}
        src={experience?.img} 
    />}
    contentStyle={{
        display:"flex",
        flexDirection:"column",
        gap:"12px",
        background: "#1d1836", 
       color:" #fff", 
       backgroundColor: "rgba(17, 25, 40, 0.83)", 
       border:" 1px solid rgba(255, 255, 255, 0.125)",
       borderRadius: "6px",
       boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
    }}
    contentArrowStyle={{
        borderRight:"7px solid rgba(255,255,255,0.3)"
    }}
    date={experience.date}
    >
  <Top>
 <Image src={experience.img}/>
 <Body>
    <Role>{experience.role}</Role>
    <Company>{experience.company}</Company>
    <Date>{experience.date}</Date>
 </Body>
  </Top>
    </VerticalTimelineElement>
  )
}

export default ExperienceCard
