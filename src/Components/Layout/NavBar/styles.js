import styled from 'styled-components';

export const Wrapper = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
background-color:#fff;
height:80px;
max-height:80px;
align-items:center;
`
export const NavBar = styled.ul`
display:flex;
list-style: none;
flex-direction:row;
margin:0;
padding:0;
align-items:center;
height:80px;
li{
    display:flex;
    flex-direction:column;
    margin: 0px 10px;
    img{
        width:35px;
        border:2px solid  #53A8CB;
        border-radius:50%;
    }
    :nth-child(2){
       img{ background-color:#53A8CB;
    }}
    :last-child{
        background-color:#53A8CB;
        margin:0;
        padding:12px 20px;
        height:70%;
    }
}


`
export const Logo = styled.div`
margin:0 10px;
`