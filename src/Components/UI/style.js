import styled from 'styled-components'


export const Container = styled.div`
position:relative;
span{
  position:absolute;
  left:10px;
  top:12px;
}

`

export const Input = styled.input.attrs(props => ({
  type: props.type,
}))`
    width: 150px;
    height:40px;
    font-size: 15px;
    padding: 8px;
    color: #000000;
    border-radius: 5px;
    border:1px solid #47525D;
    background-color:transparent;
    padding-left:25px;
   
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

position:relative;
span{
  position:absolute;
  right:21px;
  top:9px;
}

svg{
  display:none;
}
>div{
  :focus{
    color: #000000;
    border-radius: 5px;
    border:1px solid #47525D;
  }
  >div{
    color: #000000;
    height:40px;
    border-radius: 5px;
    border:1px solid #47525D;
  

    :hover{
      color: #000000;
      border-radius: 5px;
      border:1px solid #47525D;
    }
   
  }

  .css-1okebmr-indicatorSeparator{
     display:none;
}
.css-1wa3eu0-placeholder{
  color: #47525D;
}


}
`