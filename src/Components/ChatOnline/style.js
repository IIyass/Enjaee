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

export const RightSide = styled.div`
width:78%;
background-color:#fff;
box-shadow: 0px 0px 4px rgba(209, 222, 242, 0.5);
border-radius: 5px;
display:flex;
flex-direction:column;
`;

export const CrossWrapper = styled.div`
height:80%;
width:100%;
margin:20px auto;
display:flex;
overflow:auto;
flex-direction:column;
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

export const Footer = styled.div`
display:flex;
width:95%;
justify-content:space-between;
margin:0 auto;
button{
    width:10%;
    color:#fff;
    height:50px;
    background-color:#53A8CB;
    border:none;
    border-radius:5px;
}
`;

export const QuoteWrapper = styled.div`
margin-left:20px;
display:flex;
flex-direction:column;
width:65%;
align-self:${({ sender }) => sender ? 'end' : 'start'};
#asset{
    width:95%;
    height:300px;
}
#messageWrapper{
    display:flex;
    flex-direction:column;
}
#messageContainer{
    display:flex;
    flex-direction:${({ sender }) => sender ? 'row-reverse' : 'row'};
    img{
        margin-left:10px;
        margin-right:10px;
    }
}

#info{
    display:flex;
    flex-direction:row;
    align-self:${({ sender }) => sender ? 'end' : 'start'};
    margin-bottom:10px;
    h1{
        font-family: Roboto;
        font-weight: 700;
        font-size:16px;
        margin:0;
        margin-right:20px;
    }
    p{
        font-family: Roboto;
        font-weight: 400;
        font-size:16px;
        margin:0;
        margin-left:10px;
    }
}

#message{
background-color:${({ sender }) => sender ? ' #F8F8F8' : ' #164664'};
border-radius: ${({ sender }) => sender ? ' 20px 0px 20px 20px' : '0px 20px 20px 20px'};
box-shadow: 0px 0px 4px rgba(209, 222, 242, 0.5);
height:auto;
width:100%;
p{
font-weight:400;
font-size:20px;
padding-left:10px;
color:${({ sender }) => sender ? '#4A4A4A' : '#fff'} ;
}
}
`