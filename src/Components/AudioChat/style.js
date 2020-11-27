import styled from 'styled-components'


export const Wrapper = styled.div`
width:100%;
height:100%;
border-radius: 5px;
text-align:center;
display:flex;
flex-direction:column;
justify-content:space-evenly;
overflow:auto;
overflow-style: none;  
scrollbar-width: none;
-ms-overflow-style:none;
::-webkit-scrollbar {
    display: none;
}
background:linear-gradient(180deg, #F08835 0%, #FF7271 100%);
#profil{
    margin: 0 auto;
    width:408px;
    height:308px;
    border-radius: 10px;
}

>div{
    width:60%;
    margin:0 auto;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    button{
        width:200px;
        height:50px;
        background-color:#fff;
        border-radius:5px;
    }
    button:nth-of-type(2) {
       border:1px solid red;
       color:red;
     }
     button:nth-of-type(1) {
        border:1px solid green;
        color:green;
      }
}

#TimeDetail{
    display:flex;
    flex-direction:column;
h1{
font-family: Roboto;
font-weight: 400;
font-size: 34px;
line-height: 39.84px;
color:#fff;
margin:0;
}
span{
font-weight: 175;
font-size: 50px;
line-height: 68px;
color:#fff;
}
}

#chatDetail{
    justify-content:space-evenly;
    button{
        border-radius: 126.126px;
        color:#000;
        border:none;
        width :189.19px;
        height :55.5px;
    }
    img{
        width:60px;
        height:60px;
    }
}
`;
