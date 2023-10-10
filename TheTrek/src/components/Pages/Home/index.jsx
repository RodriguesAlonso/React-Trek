import styled from "styled-components"
import Header from "../../Header"

const StyledHome = styled.body`
    display:block;
    text-align:center;    
    align-items:center;
    height:100vh;
    width: 100vw;
    margin: 0px;    
    background-image: url('BG_trek.jpeg');
    background-size: cover;
    background-position: center;
    h1{
        margin: 0px;
        font-size: 5rem;
    }
    h2{
        font-size: 2rem;
    }    
`

const Home = () =>{
    return(
        <StyledHome>
            <h1>React Trek</h1>
            <h2>The Home</h2>
            <Header />
        </StyledHome>
    )
}

export default Home