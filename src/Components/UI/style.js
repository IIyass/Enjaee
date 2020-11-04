import styled from 'styled-components'

export const Input = styled.input.attrs(props => ({
  type: props.type,
}))`
    width: 150px;
    height:45px;
    font-size: 15px;
    padding: 8px;
    color: #000000;
    border-radius: 5px;
    border:1px solid #47525D;
    background-color:transparent;
    ::placeholder {
      color: hsl(0,0%,50%);
      font-size:14px;
      font-weight: 400;
      font-family:Roboto;

    }
  `

export const SelectContainer = styled.div`
width: 150px;
height:45px;
padding:0px !important;
font-size: 15px;
padding: 8px;
color: #f9a826;
.css-26l3q-menu{
 color:red;
}
>div{
  :focus{
    color: #000000;
    border-radius: 5px;
    border:1px solid #47525D;
  }
  >div{
    color: #000000;
    border-radius: 5px;
    border:1px solid #47525D;
    background-color:transparent;
    :hover{
      color: #000000;
      border-radius: 5px;
      border:1px solid #47525D;
    }
   
  }

}
`