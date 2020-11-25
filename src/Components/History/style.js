import styled from 'styled-components'


export const Wrapper = styled.div`
height:100%;
overflow:auto;
`;

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