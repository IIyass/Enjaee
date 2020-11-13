import styled from 'styled-components'

export const Container = styled.div`
position:relative;
display:flex;
flex-direction:column;
margin-top:15px;
#label{
  color:#000000;
  margin:0;
  margin-bottom:3px;
}
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
    font-family:Roboto;
    font-weight:400;
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
position:relative;
display:flex;
flex-direction:column;
margin-top:15px;
margin-right: 10px;
#label{
  color:#000000;
  margin:0;
  margin-bottom:3px;
}

`


export const ProfilInput = styled.input.attrs(props => ({
  type: props.type,
}))`
 
    width: 100%;
    font-size: 15px;
    width: -moz-available;
    width: -webkit-fill-available;
    padding: 8px;
    color: #f9a826;
     border:none;
     border-bottom:2px solid #4A4A4A;
     ::placeholder{
       color:#4A4A4A;
     }
    
  `
