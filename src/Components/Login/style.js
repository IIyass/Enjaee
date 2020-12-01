import styled from 'styled-components'

export const AuthWrapper = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
`;

export const LeftContainer = styled.div`
width:50%;
height:100vh;
background-color:#F8F8F8;
display:flex;
img{
    margin:auto;
}

`;

export const Formcontainer = styled.div`
width:50%;
height:100vh;
background-color:#53A8CB;
display:flex;

#container{
    width:100%;
     margin:auto;
    height:70%;
}

h1{
    text-align:center;
    font-size:100px;
    font-weight:700;
    color:#fff;
    font-family:Roboto;
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
    >div{
        display:flex;
        justify-content:space-between;
        flex-direction:row;
    }
    
    #recaptcha-container{
        margin:0 auto;
    }

    #phone{
        width: 100%;
        font-size: 15px;
        width: -moz-available;
        width: -webkit-fill-available;
        color: #fff;
        background-color:transparent;
        padding-bottom:10px;
        padding-left:5px;
        border:none;
        border-bottom:2px solid #fff;
         ::placeholder{
           color:#fff;
           font-family:Roboto;
           font-size:16px;
           font-weight:400;
         }
    }
}
`;