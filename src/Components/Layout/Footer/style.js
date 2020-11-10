import styled from 'styled-components'



export const Wrapper = styled.div`
align-items:center;
display:flex;
height:80px;
height:50px;
max-height:100px;
background-color:#fff;
background-color:#fff;
flex-direction:column;
box-shadow: 0px -4px 8px rgba(151, 151, 151, 0.2);
padding:20px 0px;
padding-top:5px;
img{
    width:150px;
    margin-left:-10px;
}

`

export const Details = styled.div`
display:flex;
flex-direction:column;
width:100%;
height:90%;
justify-content:space-around;
ul{
display:flex;
font-family:Roboto;
font-weight:400;
list-style: none;
flex-direction:row;
margin:0;
margin-top:25px;
padding:0;
width:100%;
li{
    margin:0 5px;
    :first-child{
        flex:0.5;
        img{
            margin-left:-20px;
        }
    }
}
}

`