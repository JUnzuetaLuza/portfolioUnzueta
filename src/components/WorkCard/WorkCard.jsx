import { useState } from "react";
import css from "./WorkCard.module.css";

export const WorkCard = ({ work }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className={isFlipped ? `${css.workCard} ${css.flipped}` : `${css.workCard}`}>
      <div className={css.cardInner}>
        
        <div className={css.cardFront}>
          <img src={work.image} alt={work.name} className={css.workImage} />
          <div>
            <h3>{work.name}</h3>
            <a onClick={() => setIsFlipped(true)}>ⓘ</a>
          </div>
        </div>

        <div className={css.cardBack}>
          <div>
            {work.skills.map((skill) => (
              <h4>{skill}</h4>
            ))}
          </div>
          <a onClick={() => setIsFlipped(false)}>X</a>
        </div>

      </div>
    </div>
  );
};