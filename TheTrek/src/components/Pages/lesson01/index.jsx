import styled from "styled-components"


const StyledLesson01 = styled.header `
    padding:10px;    
    height: 100vh;
    width: 100vw;
    align-items:center;
    background-image: url('bg_lesson01.jpeg');
    background-size: cover;
    background-position: center;
    
    
    h1{
        padding:10px;
        margin: 0px;
        margin-bottom: 20px;
        background-color: #7777eb;    
        width:100%;
    }
    

`
const Wrapper = styled.div`    
    color: #741BA1;
    display: flex;      
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
    article{        
        background-color: #fdabde;
        align-items:center;
        padding: 20px;
        width:500px;
    }
    article h2{
        margin:0px
    }
    section{
        width:500px;
        background-color:#d6c2f4;
        padding: 20px;
    }
`

const StyledTable = styled.table `
    table{
        width:500px;
        height: 200px;
        text-align: center;
        border: 1px solid black;
    }
    caption{
        background-color: #fa9ad5;
        font-size: 1.5rem;
        font-weight: bold;
        
    }
    thead{
        background-color:#C904D6;
        font-weight: bolder;
        font-size: 1.2rem;
    }
    th td{
        
    }
    tbody{
        background-color:#28ED8B;
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
                <button><a href="/"> HOME</a></button>
                <Wrapper>
                    <article>
                    <h2>Summary</h2>
                    <cite>
                    <q> The map() method is an iterative method. It calls a provided callbackFn function once for each element in an array and constructs a new array from the results. <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">(developer.mozilla)</a></q>
                    </cite>
                                </article>
                                
                                <StyledTable>
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
                                </StyledTable>
                                <section>
                    <p>Here, there is a mapping (using .map()) of the crew array to create rows in the table. Each member object in the crew array is mapped to a row in the table, where the Name, Profession and Age properties are inserted into the corresponding cells.</p>
                                </section>
                </Wrapper>
            </StyledLesson01>

        </>


    )
}

export default Lesson01
