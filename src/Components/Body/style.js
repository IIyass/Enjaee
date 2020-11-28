import styled from 'styled-components'


export const Wrapper = styled.div`
height:100%;
overflow:auto;
overflow-style: none;  
scrollbar-width: none;
-ms-overflow-style:none;
::-webkit-scrollbar {
    display: none;
}
`;

export const SearchBar = styled.div`
width:100%;
display:flex;
margin-top:20px;
font-family:Roboto;
justify-content:space-between;
`

export const CardLayout = styled.div`
display: grid;
grid-template-columns: 30% 30% 30%;
grid-template-rows: auto auto auto;
column-gap:3%;

>div:not(:nth-child(${({ index }) => index + 1})){
    opacity:0.5;
}

`;


