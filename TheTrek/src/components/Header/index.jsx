import styled from "styled-components"


const StyledHeader = styled.header `
    display: flex;
    justify-content: end;
    width:100%;
    
    




li {
    background-color:#85f2b494;
    box-shadow: 2px 2px 10px #EDAB28;
    list-style-type: none;
    padding: 5px;    
    text-align: start;
    margin: 10px;
    
    
    
}
a{
    color: white;
    font-weight: bolder;
    
    

}


`

const Header = () => {
    return (
        <StyledHeader>
            <nav>
                <li>
                    <a href="/lesson01">Lesson01 method MAP</a>
                </li>
                <li>
                    <a href="/lesson02">Lesson02 Fetch API</a>
                </li>
                <li>
                    <a href=""></a>
                </li>
                
            </nav>
        </StyledHeader>
    )
}

export default Header
