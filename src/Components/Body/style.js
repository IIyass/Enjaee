import styled from 'styled-components'


export const Wrapper = styled.div`
height:100%;
overflow:auto;
overflow-style: none;  
scrollbar-width: none;
`

export const SearchBar = styled.div`
width:100%;
display:flex;
margin-top:20px;
justify-content:space-between;
`

export const CardLayout = styled.div`
justify-content:space-between;
display: flex;
flex-wrap:wrap;
flex-direction:row;
>div{
width:30%;
}
`


export const GroupBar = styled.div`
display:flex;
flex-direction:row;
position:relative;
margin-top:18px;



input{
    background-color:#fff;
    border:2px solid #53A8CB;
    margin-left:15px;
    width:75%;
}

button{
    width:76px;
    height:43px;
    background-color:#53A8CB;
    border:none;
    border-radius:5px;
    position:absolute;
    color:#fff;
    right:0;
    cursor:pointer;
}
`
