import styled from "styled-components"


const StyledHeader = styled.header `

background-color:#85F2B4;
color: 7777eb;
max-width: 500px


`

const Header = () => {
    return (
        <StyledHeader>
            <nav>
                <ul>
                    <li>
                        <a href="/lesson01">Lesson01 MAP</a>
                        <a href=""></a>
                        <a href=""></a>
                    </li>
                </ul>
            </nav>
        </StyledHeader>
    )
}

export default Header
