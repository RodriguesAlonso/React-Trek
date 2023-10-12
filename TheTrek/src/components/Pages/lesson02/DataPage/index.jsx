import jsonData from "./db.json"

function DataPage() {
    return(
        <>
        {
            <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        }
        </>
    )
}

export default DataPage
