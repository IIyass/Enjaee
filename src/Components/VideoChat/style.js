import styled from 'styled-components';

export const Wrapper = styled.div`
width:100%;
height:100%;
text-align:center;
display:flex;
flex-direction:column;
justify-content:space-evenly;
overflow:auto;
position:relative;
overflow-style: none;  
scrollbar-width: none;
-ms-overflow-style:none;
::-webkit-scrollbar {
    display: none;
}
border-radius:5px;

.videoInsert {
    position: absolute; 
    right: 0; 
    bottom: 0;
    min-width: 100%; 
    min-height: 100%;
    width: auto; 
    height: auto; 
    background-size: cover;
    overflow: hidden;
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


#profil{
    margin: 0 auto;
    width:408px;
    height:308px;
    border-radius: 10px;
}

#top{
    width:95%;
    position:absolute;
    height:150px;
    top:20px;
    left:20px;
    display:flex;
    justify-content:space-between;
    .video{
        width:200px;
        height:100%;
        border: 2px solid #FFFFFF;
        border-radius: 4px;
    }
>div{
width: 200px;
height: 80px;
background: #222425;
mix-blend-mode: normal;
opacity: 0.5;
border-radius: 4px;
h1{
font-weight: 100;
font-size: 50px;
line-height: 68px;
color:#fff;
align-items: center;
margin:0;
}
}

}
#bottom{
    width:100%;
    height:150px;
    display:flex;
    position:absolute;
    bottom:0;
    display:flex;
    background-color: rgba(34,36,37,0.5);
    mix-blend-mode: normal;
    justify-content:center;
    align-items:center;
    img{
        width:45px;
        height:45px;
    }
    button{
        opacity:1;
        margin:0 20px;
        color:#000;
        background-color:#fff;
        border:none;
        opacity:1;
        border-radius: 126.126px;
    }

}

#AcceptInvitation{
    display:${props => props.display ? 'none' : 'block'};
}

#ScreenVideo{
    display:${props => props.display ? 'block' : 'none'};
}
`;
