import React, { useState } from 'react'
import styled, { useTheme } from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Bio } from "../data/constants"
import { MenuRounded } from "@mui/icons-material"
const Navbar = () => {
    const Nav = styled.div`
      background-color:${({ theme }) => theme.bg};
  height:80px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:1rem;
  position:sticky;
  top:0;
  z-index:10;
    `
    const NavbarContainer = styled.div`
    width:100%;
    max-width:1200px;
    padding:0 24px;
    justify-content:space-between;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:1rem;
  
 `;
    const NavLogo = styled(LinkR)`
    width:80%;
    padding: 0 6px;
    text-decoration:none;
    color:white;
    font-weight:500;
    font-size:18px;
    `
        ;

    const NavItems = styled.ul`
width:100%;
display:flex;
align-items:center;
justify-content:center;
gap:32px;
padding: 0 6px;
list-style:none;
@media (max-width:768px) {
  display:none;}
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
    const ButtonContainer = styled.div`background-color:${({ theme }) => theme.bg};
 width:80%;
 height:100%;
 justify-content:center;
 align-items:center;
 display:flex;
 padding:0 6px;
@media (max-width:768px) {
  display:none;} `;
    const GithubButton = styled.a`
border:1px solid ${({ theme }) => theme.primary};
color: ${({ theme }) => theme.primary};
justify-content:center;
display:flex;
align-items:center;
border-radius:20px;
cursor:pointer;
padding:10px 20px;
font-size:16px;
transition:all 0.6s ease-in-out;
text-decoration:none;
font-weight:500;
&:hover{
background: ${({ theme }) => theme.primary};
color:${({ theme }) => theme.text_primary};
}
`
    const MobileIcon = styled.div`
height:100%;
display:centered;
color:${({ theme }) => theme.text_primary};
cursor:pointer;

`
    const MobileMenu = styled.ul`
width:100%;
display:flex;
align-items:start;
gap:16px;
padding: 0 6px;
list-style:none;
padding:12px 40px 24px 40px;
background:${({ theme }) => theme.card_light + 99};
position:absolute;
top:80px;
right:0;
flex-direction:column;
transition:all 0.6s ease-in-out;
transform:${({ isOpen }) =>
            isOpen ? "translateY(0)" : "translateY(-100%)"};
border-radius: 0 0 20px 20px; 
box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")}; 
z-index: ${({isOpen}) => (isOpen ? "1000" : "-1000" )};



`



  const theme=useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        if (!isOpen) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }
    return (
        <Nav>

            <NavbarContainer>
                <NavLogo to="/">
                    Pravya
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                    <MenuRounded style={{ color: 'inherit' }} />
                </MobileIcon>
                <NavItems>
                <NavLinks href="#About">About</NavLinks>
                        <NavLinks href="#Skills">Skills</NavLinks>
                        <NavLinks href="#Experiences">Experiences</NavLinks>
                        <NavLinks href="#Projects">Projects</NavLinks>
                        <NavLinks href="#Education">Education</NavLinks>
                </NavItems>
                {isOpen && (
                    <MobileMenu isOpen={isOpen}>
                        <NavLinks href="#About">About</NavLinks>
                        <NavLinks href="#Skills">Skills</NavLinks>
                        <NavLinks href="#Experiences">Experiences</NavLinks>
                        <NavLinks href="#Projects">Projects</NavLinks>
                        <NavLinks href="#Education">Education</NavLinks>
                        <GithubButton href={Bio.github} target='_blank' style={{
                            background:theme.primary,
                            color:theme.text_primary
                        
                        }}>Github Profile</GithubButton>
                    </MobileMenu>)}


                <ButtonContainer>
                    <GithubButton href={Bio.github} target='_blank'>Github Profile</GithubButton>
                </ButtonContainer>
            </NavbarContainer>
        </Nav>

    )
}

export default Navbar
