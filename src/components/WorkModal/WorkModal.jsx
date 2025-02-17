import css from './WorkModal.module.css'
import github from '../../assets/github.png';
import youtube from '../../assets/youtube.png';
import www from '../../assets/www.png';

export const WorkModal = ({ isOpen, onClose, work}) => {
    if (!isOpen) return null;

    return (
        <div className={css.overlay}>
            <div className={css.modal}>
                <h2>{work.name}</h2>
                <p>{work.description}</p>
                <div>
                    <ul className={css.skillsModal}>
                        {work.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                    <ul className={css.linksModal}>
                        {work.github ? 
                        <a href={work.github} target="_blank" rel="noopener noreferrer"><img src={github}/></a> : <></> }
                        {work.youtube ? 
                        <a href={work.youtube} target="_blank" rel="noopener noreferrer"><img src={youtube}/></a> : <></> }
                        {work.web ? 
                        <a href={work.web} target="_blank" rel="noopener noreferrer"><img src={www}/></a> : <></> }
                    </ul>
                </div>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    )
}