import React from 'react';
import style from './SurveyQuestion.module.css';
import ProgressBar from './ProgressBar';

const currentQuestion = 7;
const totalQuestion = 10;
const progressPercentage = Math.floor((currentQuestion / totalQuestion) * 100);

const title = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.`;

const choices = [
  { order: 1, value: `This is choice 1` },
  { order: 2, value: `This is choice 2` },
  { order: 3, value: `This is choice 3` },
  { order: 4, value: `This is choice 4` },
  { order: 5, value: `This is choice 5` },
];

export default function SurveyQuestion() {
  return (
    <div className={style.sectionsWrapper}>
      <div className={style.upperSectionsWrapper}>
        <section>
          <div className="text-20">
            Progress State: {currentQuestion} / {totalQuestion}
          </div>
          <ProgressBar progressPercentage={progressPercentage} />
        </section>
        <section className={style.question}>
          <form>
            <legend>
              <h2 className={style.title}>{title}</h2>
            </legend>
            <fieldset className={style.choices}>
              {choices.map((choice) => {
                return (
                  <label key={choice.order} htmlFor={`choice-${choice.order}`} className={style.choice}>
                    <input type="radio" name="choices" id={`choice-${choice.order}`} className="invisible" />
                    {choice.value}
                  </label>
                );
              })}
            </fieldset>
          </form>
        </section>
      </div>
      <section className={style.buttons}>
        <button type="button">
          <img src="/icons/left-arrow-btn.svg" alt="left-arrow-btn" />
        </button>
        <button type="button">
          <img src="/icons/right-arrow-btn.svg" alt="right-arrow-btn" />
        </button>
      </section>
    </div>
  );
}