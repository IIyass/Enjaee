import styled from 'styled-components'

export const Wrapper = styled.div`
display:flex;
width:100%;
height:100%;
flex-direction:row;
justify-content:space-between;
overflow:auto;
overflow-style: none;  
scrollbar-width: none;
-ms-overflow-style:none;
::-webkit-scrollbar {
    display: none;
}
`;


export const LeftContainer = styled.div`
width:21.8%;
background-color:#fff;
box-shadow: 0px 0px 4px rgba(209, 222, 242, 0.5);
border-radius: 5px;
height:800px;
padding:0px 20px;
img{
    width:90%;
    height:90%;
    margin:auto;
 
}
input{
    ::placeholder{
        color:#000 !important;
    }
    color:#000;
    margin-left: auto;
    border-color:#C4C4C4;
    padding:10px;
    box-sizing:border-box;
    width:85%;
    margin-bottom:20px;
   
}
span{
    left:3px;
    top:10px;
    width:30px;
    height:30px;
}

#image{
    margin:auto;
    margin-top:15px;
    width:100%;
    height:250px;
    display:flex;
    border: 2px solid #F8F8F8;
    box-shadow: 0px 0px 4px rgba(209, 222, 242, 0.5);
    box-sizing: border-box;
    border-radius: 5px;
}


button{
    width:100%;
    margin-bottom:20px;
    cursor:pointer;
}

button:nth-of-type(3) {
   margin-bottom:8%;

}

`;

export const RightContainer = styled.div`
width:73.5%;
height:800px;
background-color:#fff;
box-shadow: 0px 0px 4px rgba(209, 222, 242, 0.5);
border-radius: 10px;

`;

