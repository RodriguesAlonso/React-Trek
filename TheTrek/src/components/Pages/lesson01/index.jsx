import styled from "styled-components"

const StyledLesson01 = styled.header `
    display: flex;
    background-color: #7777eb;
    table{
        width: 600px;
        height: 100px;
        text-align: center;
    }
    caption{
        font-size: 1.5rem;
        font-weight: bold;
    }
`

const crew = [
    {
        Name: 'James',
        Profession: 'Captain',
        Age: '37'
    }, {
        Name: 'Spock',
        Profession: 'Commander',
        Age: '37'
    }, {
        Name: 'Kathryn',
        Profession: 'Captain',
        Age: '38'
    },
]


const Lesson01 = () => {
    return (
        <>
            <StyledLesson01>
                <h1>MAP</h1>
            <table>
                <caption>My Crew</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Profession</th>
                        <th>age</th>
                    </tr>
                </thead>
                <tbody> {
                    crew.map((member) => (
                        <tr>
                            <td>{
                                member.Name
                            }</td>
                            <td>{
                                member.Profession
                            }</td>
                            <td>{
                                member.Age
                            }</td>
                        </tr>
                    ))
                } </tbody>
            </table>
                </StyledLesson01>
        </>


    )
}

export default Lesson01
