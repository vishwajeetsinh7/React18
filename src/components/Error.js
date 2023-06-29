import { useRouteError } from "react-router-dom"

const Error = () => { 
    const err = useRouteError()
    console.log(err)
    return (
        <div>
            <h1>OOppss!!</h1>
            <p>Somehting went wrong!!</p>
            <strong>{err.status + ':' + err.statusText}</strong>
        </div>
    )
}

export default Error