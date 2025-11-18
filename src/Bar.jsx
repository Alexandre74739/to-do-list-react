import { useCallback, useState } from "react";
import './Bar.css';
// Note: useMemo n'est pas nécessaire ici

function Bar() {
    // 1. CORRECTION: Initialisation des états
    const [content, setContent] = useState("");
    // CORRECTION: Utiliser useState pour initialiser le tableau des tâches
    const [tasks, setTasks] = useState([]); 
    // const [count, setCount] = useState(0); // Non utilisé, peut être retiré

    // 2. Fonction de gestion du changement de l'input
    const handleContentChange = useCallback((e) => {
        console.log('e', e);
        
        // CORRECTION: Mettre à jour l'état avec la nouvelle valeur
        setContent(e.target.value); 
    }, []);

    // 3. Fonction pour ajouter une tâche au tableau (déclenchée par le bouton ADD)
    const addTask = useCallback(() => {
        if (content.trim() === "") return; // Empêche l'ajout de tâches vides
        
        const newTask = {
            id: Date.now(),
            text: content.trim(),
            completed: false
        };

        // Ajout immuable de la nouvelle tâche au tableau
        setTasks([...tasks, newTask]);
        
        // Réinitialisation de l'input
        setContent(""); 

    }, [content, tasks]); // Dépendance à 'content' pour lire sa valeur

    return (
        <>
            <div className="input-group-wrapper">
                <input
                    type="text"
                    className="input-task"
                    placeholder="Votre tâche..."
                    // LIAISON: Lier l'input à l'état 'content'
                    value={content} 
                    onChange={handleContentChange}
                />
                <button
                    // ACTION: Déclencher l'ajout de la tâche
                    onClick={addTask}
                    className="btn-inside">
                    ADD
                </button>
            </div>
            
            {/* 4. RENDU: Afficher les nouvelles div (tâches) */}
            <div className="task-container">
                {tasks.map((task) => (
                    <div key={task.id} className="task-container">
                        {task.text} - {task.completed ? "done" : "todo"}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Bar;