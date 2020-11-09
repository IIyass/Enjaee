import styled from 'styled-components'

export const Container = styled.div`
position:relative;
span{
  position:absolute;
  left:10px;
  top:15px;
}

`

export const Input = styled.input.attrs(props => ({
  type: props.type,
}))`
    width: 200px;
    height:28px;
    position:relative;
    font-size: 15px;
    padding: 8px;
    color: #000000;
    border-radius: 5px;
    border:1px solid #47525D;
    background-color:transparent;
    padding-left:25px;
   
  `

export const SelectContainer = styled.div`
`