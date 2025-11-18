import { useCallback, useMemo, useState } from "react";
import './Bar.css';


function Bar() {
    const [count, setCount] = useState(0);
    const [content, setContent] = useState("");
    const [task, setTask] = ([]);


    const handleContentChange = useCallback((e) => {
        setContent(content = e.target.value);
    }, []);

    

    return (
        <>
            <div className="input-group-wrapper">
                <input
                    type="text"
                    className="input-task"
                    placeholder="Votre tâche..."
                />
                <button
                    onClick={handleContentChange}
                    className="btn-inside">
                    ADD
                </button>
            </div>
        </>
    )
}

export default Bar;