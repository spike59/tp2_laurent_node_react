import { useEffect } from "react";

function TestScreen() {
    useEffect(()=>{
        fetch("http://localhost:5500").then(console.log)
    })
    
    return (
        <div>
            <h1>test screen</h1>
        </div>
    )
}

export default TestScreen;