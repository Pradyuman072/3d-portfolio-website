import React from 'react'
import styled from 'styled-components';
import { Bio } from '../data/constants'
import Typewriter from "typewriter-effect";
import HeroImg from "../images/HeroImage.jpeg"
import HeroBgAnimation from "../Components/HeroBgAnimation";
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";
import StarCanvas from './Canvas/Stars';
import {headContainerAnimation, headTextAnimation} from "../utils/motion"
const Hero = () => {
  const HeroContainer = styled.div`
    display:flex;
    justify-content:center;
    position:relative;
    padding:80px 30px;
    z-index:1;
    align-items:center;
    @media(max-width: 960px){
      padding:66px 16px;
    };
    @media(max-width: 640px){
      padding:32px 16px;
    };
    clip-path:polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
    `
  const HeroInnerContainer = styled.div`
    position:relative;
    display:flex;
    justify-content:space-between;
    width:100%;
    max-width:1100px;
    @media (max-width:960px){
   flex-direction:column;
    }
    `
  const HeroLeft = styled.div`
     width:100%;
    order:1;
    gap:6px;
    @media (max-width:960px){
   order:2;
   margin-bottom:30px;
   display:flex;
   flex-direction:column;
   align-items:center
    }
    `
  const HeroRight = styled.div`
     width:100%;
    order:2;
    display:flex;
    justify-content:end;
     @media (max-width:960px){
   order:1;
   margin-bottom:3px;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
   margin-bottom:80px;
    }
@media(max-width:640px){
margin-bottom:30px;
}

   `
  const Title = styled.div`
   font-weight:700;
   font-size:50px;
   color:${({ theme }) => theme.text_primary};
   line-height:68px;
   @media(max-width:960px){
   text-align:center;
   
   }
   @media(max-width:640px){
   font-size:40px;
   line-height:48px;
    margin-bottom: 8px;
   }
   `
  const TextLoop = styled.div`
   font-weight:600;
   font-size:32px;
   display:flex;
   gap:12px;
   color:${({ theme }) => theme.text_primary};
   line-height:68px;
   @media(max-width:960px){
   text-align:center;
   
   }
   @media(max-width:640px){
   font-size:22px;
   line-height:48px;
   margin-bottom:16px;
   }
   `
  const Span = styled.div`
   cursor:pointer;
   color:${({ theme }) => theme.primary};
  
   `
  const SubTitle = styled.div`
   font-size: 20px; 
   line-height: 32px; 
   margin-bottom: 42px;
   color: ${({ theme }) => theme.text_primary + 95};
    @media (max-width:960px){
   font-size:16px;
   line-height:32px;
    }
   `
  const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  cursor:pointer;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 700;
  font-size: 18px;
  color: white;
  &:hover{
  transform:all 0.4s ease-in-out;
  box-shadow:20px 10px 60px #1F2634;
  filter:brightness(1);
  }
  @media(max-width:640px){
  padding:12px 0;
  font-size:18px;}
`;
  const Img = styled.img`
  border-radius:50%;
  width:100%;
  height:100%;
  max-width:400px;
  max-height:400px;
  border:2px solid ${({ theme }) => theme.primary};;
  @media(max-width:640px){
  max-width:280px;
  max-height:280px;}
  `;
  const HeroBg = styled.div`
  position: absolute;
display: flex;
top: 50%;
right: 0;
bottom: 0;
left: 50%;
width:100%;
height:100%;
max-width:1360px;
justify-content:end;
-webkit-transform: translateX(-50%) translateY(-50%) ;
transform: translateX(-50%) translateY(-50%) ;
  `
  return (
    <div id='About'>
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
          <StarCanvas/>
        </HeroBg>
        <motion.div {...headContainerAnimation}>  <HeroInnerContainer>
          <HeroLeft>
            <motion.div {...headTextAnimation}><Title>Hi, I am <br />{Bio.name}</Title>   
            <TextLoop>
              I am a
              <Span>
                <Typewriter options={
                  {
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }
                } />
              </Span>
            </TextLoop></motion.div>
            <motion.div {...headContainerAnimation}>  
            <SubTitle>{Bio.description}</SubTitle></motion.div>
            <ResumeButton>Check Resume
            </ResumeButton>
          </HeroLeft>
          <HeroRight>
          <motion.div {...headContainerAnimation}>   
            <Tilt> <Img src={HeroImg} alt="Pradyuman Sharma" /></Tilt>
           </motion.div>
          </HeroRight>

        </HeroInnerContainer></motion.div>
      
      </HeroContainer>
    </div>
  )
}

export default Hero
