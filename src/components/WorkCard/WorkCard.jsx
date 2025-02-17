import css from "./WorkCard.module.css";

export const WorkCard = ({ work, onClick }) => {
  
  return (
    <div className={css.workCard} onClick={onClick}>
      <div className={css.cardFront}>
        <img src={work.image} alt={work.name} className={css.workImage} />
        <div>
          <h3>{work.name}</h3>
        </div>
      </div>
    </div>
  );
};