import styled from 'styled-components'


export const RightSide = styled.div`
width:100%;
height:100%;
background-color:#fff;
box-shadow: 0px 0px 4px rgba(209, 222, 242, 0.5);
border-radius: 5px;
display:flex;
flex-direction:column;
justify-content:space-between;
`;

export const CrossWrapper = styled.div`
height:80%;
width:100%;
margin:20px auto;
display:flex;
overflow:auto;
flex-direction:column;
`;

export const Footer = styled.div`
display:flex;
width:95%;
justify-content:space-between;
margin:0 auto;
margin-bottom:10px;
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
margin-left:${({ sender }) => sender ? '0px' : '20px'};
margin-right:${({ sender }) => sender ? '20px' : '0px'};
display:flex;
flex-direction:${({ sender }) => sender ? 'row-reverse' : 'row'};
width:65%;
align-self:${({ sender }) => sender ? 'flex-end' : 'flex-start'};


#avatar{
    height:50px;
    width:50px;
    border-radius:5px;
    margin:0 5px;
}

#asset{
    width:95%;
    height:300px;
}
#messageWrapper{
    display:flex;
    flex-direction:column;
    img{
        height:100%;
        margin-bottom:10px;
    }
    
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
    justify-content:${({ sender }) => sender ? 'end' : 'start'};
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
background:${({ gradientMessage }) => gradientMessage ? 'linear-gradient(180deg, #F08835 0%, #FF7271 100%)' : null};
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