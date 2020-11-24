import styled from 'styled-components'

export const SignupWrapper = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
height:100vh;
`;

export const LeftContainer = styled.div`
width:50%;
height:100vh;
background-color:#F8F8F8;
display:flex;
margin:0 auto;
height:100%;
flex-direction:column;
justify-content:space-around;


`;

export const Formcontainer = styled.div`
width:50%;
height:100%;
background-color:#53A8CB;
h1{
    text-align:center;
    font-size:5em;
    font-weight:700;
    color:#fff;
    font-family:Roboto;
    margin-bottom:10px;
}
form{

    width:70%;
    display:flex;
    flex-direction:column;
    height:60%;
    justify-content:space-between;
    margin:0 auto;
    button{
        background-color:#fff;
        width:100%;
        border-color:#53A8CB;
        color:#53A8CB;
    }
    a{
        text-align:right;
        text-decoration:none;
         font-weight:400;
         color:#fff;
         font-family:Roboto;
    }
}
`;