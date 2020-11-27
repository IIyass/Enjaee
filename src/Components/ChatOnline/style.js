import styled from 'styled-components'



export const Wrapper = styled.div`
display:flex;
justify-content:space-between;
flex-direction:row;
height:100%;
margin:10px 0px;
width:100%;
`;

export const LeftSide = styled.div`
width:20%;
background-color:#fff;
box-shadow: 0px 0px 4px rgba(209, 222, 242, 0.5);
border-radius: 5px;
`;

export const AvatarCard = styled.div`
width:90%;
border: 2px solid #F8F8F8;
box-sizing: border-box;
border-radius: 5px;
margin:0 auto;
margin-top:20px;
height:50%;
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
