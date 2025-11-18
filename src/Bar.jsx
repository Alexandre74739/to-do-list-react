import { useCallback, useMemo, useState } from "react";
import './Bar.css';


function Bar() {
    const [count, setCount] = useState(0);

    const handleSubmit = useCallback(() => {
        setCount(count + 1);
    })

    return (
        <>
            <div className="input-group-wrapper">
                <input
                    type="text"
                    className="input-task"
                    placeholder="Votre tâche..."
                />
                <button
                    onClick={handleSubmit}
                    className="add-btn-inside">
                    ADD
                </button>
            </div>
        </>
    )
}

export default Bar;