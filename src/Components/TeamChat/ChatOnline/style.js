import styled from 'styled-components';

export const Wrapper = styled.div`
display:flex;
width:100%;
height:100%;
flex-direction:row;
justify-content:space-between;
overflow-style: none;  
scrollbar-width: none;
-ms-overflow-style:none;
::-webkit-scrollbar {
    display: none;
}
`;

export const RightContainer = styled.div`
width:880px;
padding:20px;
height:100vh;
margin:10px 0px;
background-color:#fff;
box-shadow: 0px 0px 4px rgba(209, 222, 242, 0.5);
border-radius: 10px;
`;

export const LeftSide = styled.div`
width:260px;
padding:20px;
margin:10px;
background-color:#fff;
box-shadow: 0px 0px 4px rgba(209, 222, 242, 0.5);
border-radius: 10px;
height:100vh;
`;

export const AvatarCard = styled.div`
width:90%;
border: 2px solid #F8F8F8;
box-sizing: border-box;
border-radius: 5px;
margin:0 auto;
height:250px;
position:relative;
>div{
    width:90%;
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    height:90%;
    background: #F3F7FC;
    border-radius: 4px;
    text-align:center;
p{
        position: absolute;
        margin:0;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-family: Roboto;
        font-weight: 500;
        font-size:16px;
}
}
`;
