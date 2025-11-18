import { useCallback, useState } from "react";
import './Bar.css';

function Bar() {
    const [content, setContent] = useState("");
    const [tasks, setTasks] = useState([]); 

    const handleContentChange = useCallback((e) => {
        setContent(e.target.value); 
    }, []);

    const addTask = useCallback(() => {
        if (content.trim() === "") return; 
        
        const newTask = {
            id: Date.now(),
            text: content.trim(),
            completed: false
        };

        // Utilisation de la forme fonctionnelle pour la mise à jour
        setTasks(prevTasks => [...prevTasks, newTask]);
        setContent(""); 

    }, [content]); // Dépendance à 'content'

    // 1. NOUVEAU: Fonction pour gérer la soumission du formulaire (Entrée ou clic)
    const handleSubmit = (e) => {
        e.preventDefault(); // Empêche le rechargement de la page par défaut du formulaire
        addTask();
    };

    const handleReset = useCallback(() => {
        setTasks([]);
    })

    return (
        <>
            {/* 2. ENVELOPPER DANS UN FORMULAIRE et utiliser onSubmit */}
            <form onSubmit={handleSubmit}>
                <div className="input-group-wrapper">
                    <input
                        type="text"
                        className="input-task"
                        placeholder="Votre tâche..."
                        value={content} 
                        onChange={handleContentChange}
                    />
                    <button
                        // Le clic du bouton ADD déclenchera le handleSubmit via le type="submit" implicite
                        className="btn-inside"
                        type="submit" // S'assurer que le bouton soumet le formulaire
                    >
                        ADD
                    </button>
                </div>
            </form>
            
            <div className="task-list-wrapper">
                {tasks.map((task) => (
                    <div key={task.id} className="task-item">
                        <span className="task-text">
                            {task.text}
                        </span>
                        <span className="task-status">
                            {task.completed ? ' (Terminé)' : ''}
                        </span>
                    </div>
                ))}
            </div>

            <button className="btn-reset" onClick={handleReset}>
                Reset les tâches
            </button>
        </>
    );
}

export default Bar;