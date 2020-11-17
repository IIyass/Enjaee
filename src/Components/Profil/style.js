import styled from 'styled-components'


export const Wrapper = styled.div`
height:100%;
width:1150px;
max-width:1150px;
margin:0 auto;
margin-top:20px;
margin-bottom:20px;
overflow:auto;
overflow-style: none;  
scrollbar-width: none;
background-color:#fff;
h1{
    margin:10px 28px;
    font-family:Roboto;
    font-weight:700;
    font-size:19px;
}
`;

export const Hero = styled.div`
justify-content:space-evenly;
display:flex;
flex-direction:row;

img{
    border-radius:50%;
}
`;
export const ButtonContainer = styled.div`
margin-top:20px;
width:45%;
display:flex;
flex-direction:row;
justify-content:space-between;
`;
export const InputInfo = styled.div`
width:75%;
#ProfilInfo{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    div{
        width:45%;
    }
}`;


export const Setting = styled.div`
width:95%;
margin:0 auto;
display:flex;
flex-direction:column;
h2{
    font-family:Roboto;
    font-weight:700;
    font-size:20px;
}
h3{
    font-family:Roboto;
    font-weight:500;
    font-size:20px;
    color:#4A4A4A;
}
`;
export const Privacy = styled.div`
width:100%;
display:flex;
flex-direction:row;
flex-wrap:wrap;
`;
export const Notification = styled.div`
width:100%;
display:flex;
flex-direction:row;
flex-wrap:wrap;
`;
export const FooterProfil = styled.div`
width:100%;
display:flex;
flex-direction:row;
justify-content:space-between;
margin-top:30px;
margin-bottom:30px;
`;

export const ConditionContainer = styled.ul`
font-size: 20px;
font-weight: 400;
list-style:none;
position:relative;

h1{
    position: absolute;
    color:#fff;
    top: -90px;
    left: 0;
    font-size:24px;
    font-weight:700;
}

button{
    position:absolute;
    bottom:-85px;
    left:40%;
}
`;

export const ContactContainer = styled.div`
position:relative;
padding:20px;
align-items: center;
display: flex;
flex-direction: column;
input{
    width:420px;
    margin-bottom:10px;
}
h1{
    position: absolute;
    color:#fff;
    top: -60px;
    left: 0;
    font-size:24px;
    font-weight:700;
}

button{
    position:absolute;
    bottom:-85px;
    left:30%;
}
#green{
    position:static;
    border:none;
    background-color:#72B02E;
}
`;

export const AboutContainer = styled.div`
display:flex;
flex-direction:column;
padding:120px 300px;
padding-bottom:70px;
align-items:center;
text-align:center;
position:relative;
h1{
    position: absolute;
    color:#fff;
    top: -60px;
    left: 0;
    font-family:Roboto;
    font-size:24px;
    font-weight:700;
}
p{
    font-family:Roboto;
    font-size:24px;
    font-weight:400;
}

button{
    position:absolute;
    bottom:-80px;
    left:40%;
}
#logo1{
    margin-bottom:50px
}
#logo2{
    margin-top:50px;
}
`