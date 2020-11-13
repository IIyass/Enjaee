import styled from 'styled-components'


export const Wrapper = styled.div`
width:100%;
position:relative;
height:245px;
background-color:#ffffff;
display:flex;
flex-direction:column;
padding:10px;
justify-content:space-between;
box-shadow: 0px 0px 5px rgba(126, 126, 126, 0.5);
border-radius: 4px;
margin:15px 0;
font-family:Roboto;

}
`;
export const HeroComtainer = styled.div`
#img{
  position:relative;
  cursor:pointer;
 .profil{
   opacity:${({ selectImg }) => selectImg ? 0.3 : 1};
   width:100%;
 }
 .icon{
   position:absolute;
   top:40%;
   left:50%;
   transform:translate(-50%,0);
 }

`;

export const Description = styled.div`
width:100%;
display:flex;
position:relative;
flex-direction:row;
font-family:Roboto;
justify-content:space-between;

`;


export const CardContainer = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
font-family:Roboto;
justify-content:space-between;
`;
export const IconContainer = styled.div`
width:50%;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
img{
  cursor:pointer;
}
div{
  margin:0px 5px;
}
ul{
    padding: 0;
    width:100px;
    list-style:none;
    margin: 0;
    background: #fff;
    z-index: 1000;
    position: absolute;
    top: 100%;
    li{
      border-bottom:2px solid #000;
      padding:15px 20px;
      text-align:center;
      font-size:12px;
      font-weight:400;
      font-family:Roboto;
    }
  
}

`
export const PersonalInfo = styled.div`
width:40%;
h1 {
    margin:5px 0px;
    font-style: normal;
    font-family:Roboto;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 1.29412px; 
}
span{
    font-style: normal;
    font-weight: 400;
    font-family:Roboto;
    font-size: 14px;
    line-height: 16px;
    color: #737373;
}
`


export const ModalContainer = styled.div`
background: #FFFFFF;
box-shadow: 0px 0px 4px rgba(209, 222, 242, 0.5);
border-radius: 4px;
position:absolute;
top:40%;
left:50%;
transform: translate(-50%, -50%);
width: 70%;
height:120px;
padding:5px 5px;
z-index: 9999;

`

export const ButtonContainer = styled.div`
display: flex;
justify-content: space-between;
.red{
width: 115px;
height: 40px;
background: #FB5051;
border-radius: 4px;
border:none;
cursor:pointer;
}
.green{
width: 115px;
height: 40px;
background: #38D744;
border-radius: 4px;
border:none;
cursor:pointer;

}
`
