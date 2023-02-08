import { useState } from "react";

const Hello = function(props) {
    console.log(props);
    // let name = "sangyun";

    const [name, setName] = useState("Sangyun");

    function changeName() {
        setName(name == "Sangyun" ? "Mike" : "Sangyun");
    }
    
    return (
        <div>
            <h3>{name}({props.age})</h3>
            <button onClick={changeName}>Change name</button>
        </div>
        
    )
}

export default Hello;