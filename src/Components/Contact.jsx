import React, { useRef } from 'react'
import styled from 'styled-components';
import StarCanvas from './Canvas/Stars';
import emailjs from "@emailjs/browser"

const Container = styled.div`
  display:flex;
  flex-direction:column;
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
    flex-direction:column;
  }
`;

const Title = styled.div`
  font-size:53px;
  text-align:center;
  font-weight:600;
  margin-top:20px;
  color:${({ theme }) => theme.text_primary};
  @media(max-width:768px){
    margin-top:12px;
    font-size:32px;
  }
`;

const Desc = styled.div`
  font-size:18px;
  text-align:center;
  font-weight:600;
  color:${({ theme }) => theme.text_secondary};
  @media(max-width:768px){
    font-size:16px;
  }
`;

// CHANGED: From styled.div to styled.form to support onSubmit
const ContactForm = styled.form`
  width: 95%; 
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83); 
  border: 1px solid rgba(255, 255, 255, 0.125); 
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap:12px;
`

const ContactTitle = styled.div`
  font-size:28px;
  margin-bottom:6px;
  font-weight:600;
  color:${({theme})=>theme.text_primary};
`

const ContactInput = styled.input`
  flex:1;
  background-color:transparent;
  border:1px solid ${({theme})=>theme.text_primary+50};
  outline:none;
  font-size:18px;
  color:${({theme})=>theme.text_secondary};
  border-radius:12px;
  padding:12px 16px;
  &:focus{
    border: 1px solid ${({theme})=>theme.primary};
  }
`

const SubmitButton = styled.input`
  width: 100%;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  padding: 13px 16px; 
  margin-top: 2px; 
  border-radius: 12px;
  border: none;
  color: ${({theme}) => theme.text_primary}; 
  font-size: 18px; 
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    filter: brightness(1.1);
  }
`

const ContactInputMessage = styled.textarea`
  flex:1;
  background-color:transparent;
  border:1px solid ${({theme})=>theme.text_primary+50};
  outline:none;
  font-size:18px;
  color:${({theme})=>theme.text_secondary};
  border-radius:12px;
  padding:12px 16px;
  &:focus{
    border: 1px solid ${({theme})=>theme.primary};
  }
`

const Contact = () => {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_t9z8b19",
            "template_l7ns7iv",
            form.current,
            "QiR8wTvZbujAzMVpS"
        ).then((result) => {
            alert("Message Sent! 🚀");
            form.current.reset();
        }, (error) => {
            console.error("EmailJS Error:", error.text);
            alert("Oops! Something went wrong. Please try again.");
        });
    }

    return (
        <Container id="Contact">
            <StarCanvas />
            <Wrapper>
                <Title>Contact</Title>
                <Desc style={{ marginBottom: "40px" }}>
                   Feel free to reach me out for any questions 
                </Desc>
                <ContactForm ref={form} onSubmit={handleSubmit}>
                    <ContactTitle>Email Me 🚀</ContactTitle>
                    <ContactInput 
                        required 
                        placeholder="Your Email" 
                        name="from_email" 
                        type="email" 
                    />
                    <ContactInput 
                        required 
                        placeholder="Your Name" 
                        name="from_name" 
                    />
                    <ContactInput 
                        required 
                        placeholder="Subject" 
                        name="subject" 
                    />
                    <ContactInputMessage 
                        required 
                        placeholder="Message" 
                        name="message" 
                        rows={4} 
                    />
                    <SubmitButton type="submit" value="Send" />
                </ContactForm>
            </Wrapper>
        </Container>
    )
}

export default Contact;