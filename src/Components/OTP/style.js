import styled from 'styled-components'

export const AuthWrapper = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
`;

export const LeftContainer = styled.div`
width:50%;
background-color:#F8F8F8;
display:flex;
height:100vh;
img{
    margin:auto;
}
`;

export const Formcontainer = styled.div`
width:50%;
height:100vh;
background-color:#53A8CB;
span{
    font-size:20px;
    font-weight:500;
    font-family:Roboto;
    color:#fff;
}
h1{
    text-align:left;
    font-size:100px;
    font-weight:700;
    color:#fff;
    font-family:Roboto;
    margin-bottom:10px;
}
#header{
    margin:0 auto;
    width:70%;
    margin-bottom:40px;
}
form{

    width:70%;
    display:flex;
    flex-direction:column;
    height:50%;
    justify-content:space-evenly;
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