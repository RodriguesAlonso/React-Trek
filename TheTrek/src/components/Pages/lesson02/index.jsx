import styled from "styled-components"

const StyledLesoon02 = styled.body`
    padding:10px;    
    height: 100vh;
    width: 100vw;
    align-items:center;
    background-image: url('bg_lesson01.jpeg');
    background-size: cover;
    background-position: center;    
`

function Lesson02() {
    console.log('aqui')
    fetch('http://localhost:5173/data')
    .then((res) => res.json()).
    then((data) => console.log(data.data))


    return(
        <StyledLesoon02>
        <h1>Fetch API</h1>
        </StyledLesoon02>
        
        )
}


export default Lesson02