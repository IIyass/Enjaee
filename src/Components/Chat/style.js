import styled from 'styled-components'



export const AddCardContainer = styled.div`
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
font-size:10px;
text-align:center;
img{
    width:100%;
}
`


export const Wrapper = styled.div`
height:100%;
overflow:auto;
overflow-style: none;  
scrollbar-width: none;
`



export const CardLayout = styled.div`
justify-content:space-between;
display: flex;
flex-wrap:wrap;
flex-direction:row;
`