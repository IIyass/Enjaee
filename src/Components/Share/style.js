import styled from 'styled-components'

export const AuthWrapper = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
height:85vh;
margin-top:80px;

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
display:flex;
>div{
    margin:auto;
    height:50%;
    width:80%;
    display:flex;
    text-align:center;
    flex-direction:column;
    justify-content:space-evenly;
    span{
        font-size:20px;
        font-weight:500;
        font-family:Roboto;
        color:#fff;
    }
    >div{
        width:100%;
    }
    #cancel{
        background-color:transparent;
        color:#fff;
    }
}

`;

export const ButtonContainer = styled.div`

display:flex;
flex-direction:column;
justify-content:space-evenly;
margin:0 auto;

button{
    background-color:#fff;
    width:100%;
    border-color:#53A8CB;
    color:#53A8CB;
}

`