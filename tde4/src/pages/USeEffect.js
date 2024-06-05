import { useEffect, useState } from "react";

export const UseEffect = () => {
    const [myState, setMyState] = useState();

    useEffect(() => {
        console.log("montagem e atualização do componente");
    }, [myState]);

    const updateMyState = () => {
        setMyState("update");
    };
    return (
        <div>
            UseEffect
            <button onClick={updateMyState}>Update</button>
        </div>
    );
};

