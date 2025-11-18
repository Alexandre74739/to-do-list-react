import { useCallback, useMemo, useState } from "react";
import './Bar.css';


function Bar() {
    const [count, setCount] = useState(0);

    const handleSubmit = useCallback(() => {
        setCount(count + 1);
    })

    return (
        <>

            <input
                type="text"
                className="input-task"
                placeholder="Votre tâche..." />
            <button
                onClick={handleSubmit}></button>
        </>
    )
}

export default Bar;