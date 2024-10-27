import { LinkedIn } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { Bio } from '../data/constants'
const FooterContainer=styled.div`
width: 100%;
padding: 2rem 0; 
display: flex;
justify-content: center;
z-index:10;`
const FooterWrapper=styled.div`
width: 100%; 
max-width: 1200px;
display: flex;
flex-direction: column;
gap: 14px;
align-items: center;
padding: 1rem;
color: ${({theme }) => theme.text_primary};`
const Logo=styled.div`
font-weight: 600;
font-size: 20px;
color: ${({ theme }) => theme.primary};`
const Nav=styled.div`
width: 100%; 
max-width: 800px; 
margin-top: 0.5rem;
display: flex; 
flex-direction:row;
gap: 2rem;
justify-content: center;
@media (max-width: 768px) {
flex-wrap: wrap;
gap: 1rem;
justify-content: center;
text-align: center;
font-size: 12px;
}
` 
const NavLinks = styled.a`
color:${({ theme }) => theme.text_primary};
font-weight:500;
cursor:pointer;
transition:all 0.2s ease-in-out;
text-decoration:none;
&:hover{
color:${({ theme }) => theme.primary}};

`
const SocialMedialIcons=styled.div`
display:felx;
margin-top:1rem;
`
const SocialMedialIcon=styled.a`
display: inline-block;
margin: 0 1rem; 
font-size: 1.5rem; 
color: ${({ theme }) => theme.text_primary}
transition: color 0.2s ease-in-out;
&:hover{
color: ${({ theme }) => theme.primary};`
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Pradyuman Shrama</Logo>
        <Nav>
        <NavLinks href="#About">About</NavLinks>
                        <NavLinks href="#Skills">Skills</NavLinks>
                        <NavLinks href="#Experiences">Experiences</NavLinks>
                        <NavLinks href="#Projects">Projects</NavLinks>
                        <NavLinks href="#Education">Education</NavLinks>
                    
        </Nav>
        <SocialMedialIcons>
            <SocialMedialIcon href={Bio.linkedin} target='display'> <LinkedIn/></SocialMedialIcon>
        </SocialMedialIcons>
        </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
