import styled from 'styled-components'


export const Container = styled.div`
align-items:center;
display:flex;
height:80px;
max-height:100px;
background-color:#fff;
`
export const Wrapper = styled.div`
background-color:#fff;
box-shadow: 0px -4px 8px rgba(151, 151, 151, 0.2);
`

export const Details = styled.div`
display:flex;
margin:0 25%;
flex-direction:column;
height:100%;
justify-content:space-around;
ul{
    display:flex;
list-style: none;
flex-direction:row;
margin:0;
padding:0;
margin: 0 auto;
li{
    margin:0 10px;
}
}

`