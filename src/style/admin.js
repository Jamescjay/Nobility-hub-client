import styled from 'styled-components';

export const Container = styled.div`
border-radius: 30px;
box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.24);
position: center;
width: 878px;
max-width: 80%;
min-height: 400px;
`;

export const LogInContainer = styled.div`
position: absolute;
border-radius: 30px;
top: 10;
height:80%;
width: 52%;
z-index: 20;
`;

export const Form = styled.form`
background-color: #ffffff;
border-radius: 30px;
display: flex;
justify-content: center;
flex-direction: column;
padding: 0 50px;
height: 90%;
text-align: center;
align-items: center;
`;

export const Title = styled.h1`
font-weight: bold;
margin: 10;
font-familiy: cursive;
`;

export const Input = styled.input`
border-radius: 15px;
background-color: #eee;
border: none;
padding: 12px 15px;
margin: 8px 0;
width: 100%;
`;


export const Button = styled.button`
   border-radius: 20px;
   border: 1px solid #ff4b2b;
   background-color: #ff4b2b;
   font-size: 12px;
   font-weight: bold;
   padding: 12px 45px;
   letter-spacing: 1px;
   text-transform: uppercase;
`;

export const Anchor = styled.a`
color: #333;
font-size: 14px;
text-decoration: none;
margin: 15px 0;
`;

