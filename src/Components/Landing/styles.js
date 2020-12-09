import styled from 'styled-components'


export const Wrapper = styled.div`
text-align:center;
h1{
width: 686px;
height: 47px;
margin:0 auto;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 40px;
line-height: 47px;
margin-bottom:16px;
margin-top:100px;
}

span{
 width: 267px;
height: 28px;
margin : 0 auto;
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 28px;
color:#4A4A4A;
}

p{
width: 748px;
height: 23px;
margin:0 auto;
margin-top:4px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 23px;
color:#4A4A4A;
}


img{
width: 1110px;
left: 165px;
margin-top:53px;
}

h2{
width: 483px;
height: 40px;
margin:0 auto;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 34px;
line-height: 40px;
color: #4A4A4A;
margin-top:29px;
margin-bottom:45px;
}

#device{
    display:flex;
    flex-direction:row;
    justify-content:center;
}

h3{
width: 244px;
height: 59px;
margin:0 auto;
margin-top:40px;
margin-bottom:47px;
font-family: Roboto;
font-style: normal;
font-weight: 900;
font-size: 50px;
line-height: 59px;
text-align: center;
color: #000000;
}


#feature{
    width: 1440px;
    height: 1024px;
    position:relative;
    margin:0 auto;
    margin-bottom:21.5px;


#leftSide{

    position:absolute;
    left:0;
    display:flex;
    flex-direction:column;
    height:100%;
    width:565px;
    justify-content:center;

    img{
        width:80px;
        height:80px;
        margin:0;
        margin-bottom:8px;
    }

    h4{
        font-family: Roboto;
        font-style: normal;
        font-weight: 900;
        font-size: 34px;
        line-height: 40px;
        margin:0;
        color: #FFFFFF;
    }

    >div:nth-child(2){
        margin:150px 0;
    }
}

#rightSide{
    position:absolute;
    right:0;
    display:flex;
    flex-direction:column;
    height:100%;
    width:565px;
    justify-content:center;

    img{
        width:80px;
        height:80px;
        margin:0;
        margin-bottom:8px;
    }

    h4{
        font-family: Roboto;
        font-style: normal;
        font-weight: 900;
        font-size: 34px;
        line-height: 40px;
        margin:0;
        color: #FFFFFF;
    }

    >div:nth-child(2){
        margin:150px 0;
    }
}

#bar{
    position:absolute;
    height:100%;
    left:50%;
    transform:translate(-50%,0%);
    background:#164664;
    width:10px;
   }

#phone{
    width: 411px;
    height: 848px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    margin: auto;
    z-index:9999;
    
}
}

#logo{
    width: 75.75px;
    height: 80px;
    margin:0;
}

#footerP{
width: 325px;
height: 60px;
margin:0 auto;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 21px;
line-height: 30px;
text-align: center;
letter-spacing: 0.5px;
color: #9B9B9B;
margin-top:20px;
}

button{
    margin:0 auto;
    margin-top:41px;
    margin-bottom:30px;
    background: #53A8CB;
    border-radius: 5px;
    width:250px;
    height:50px;
    border:none;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 0.5px;
    color: #FFFFFF;
    cursor:pointer;
}
`;



export const DeviceContainer = styled.div`
background-color:#fff;
width: 100%;
height: 400px;
display:flex;
flex-direction:row;
align-items:center;
justify-content:${props => props.display ? 'flex-start' : 'flex-end'};
margin:5px;
img{
    width: 117px;
    height: 225px;
    margin:0px 65px;
}

#container{
    text-align:center;
    height:230px;
    margin-right:${props => props.display ? '0' : '104px'};
    p{
        width: 360px;
        height: 84px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        color:#4A4A4A;
        margin-bottom:52px;
    }
}

`;