import styled from 'styled-components'


export const Wrapper = styled.div`
width:30%;
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
opacity:${({ index }) => index ? 0.3 : 1}
`

export const Description = styled.div`
width:100%;
display:flex;
flex-direction:row;
justify-content:space-between;

`
export const IconContainer = styled.div`
width:39%;
display:flex;
flex-direction:row;
justify-content:space-between;

`
export const PersonalInfo = styled.div`

h1 {
    margin:5px 0px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 1.29412px; 
}
span{
    font-style: normal;
    font-weight: normal;
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
p{
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: #000000;
}
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
