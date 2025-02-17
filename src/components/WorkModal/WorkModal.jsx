import css from './WorkModal.module.css'

export const WorkModal = ({ isOpen, onClose, work}) => {
    if (!isOpen) return null;

    return (
        <div className={css.overlay}>
            <div className={css.modal}>
                <h2>{work.name}</h2>
                <p>{work.description}</p>
                <ul>
                    {work.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    )
}