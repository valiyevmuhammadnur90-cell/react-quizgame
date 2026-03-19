import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NotFound from "./NotFound";
import { BackHome, BackHomeEnd } from "../../ui/Button";

const API_URL = "https://bc489f41320cad41.mokky.dev/questions";

function Quiz() {
  const { category } = useParams();

  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}?category=${category}`)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
        setCurrent(0);
        setScore(0);
        setShowScore(false);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [category]);

  if (loading) return <p className="loading-display">Loading...</p>;
  if (!questions.length) return <NotFound />;

  const question = questions[current];

  const handleAnswer = (index) => {
    if (index === question.correct) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowScore(true);
    }
  };

  function scoreExplainer(score) {
    if (score <= 2 && score != 3) {
      return (
        <h1 className="scoreExplainerText">
          Bad score. Need to study a lot ❌
        </h1>
      );
    } else if (score == 3) {
      return (
        <h1 className="scoreExplainerText2">
          Nice score. Need to study more 👍
        </h1>
      );
    } else {
      return (
        <h1 className="scoreExplainerText3">Great score. Book lover 🔥</h1>
      );
    }
  }
  function resetQuiz() {
    setCurrent(0);
    setScore(0);
    setShowScore(false);
  }

  return (
    <div>
      <section className="quiz">
        <h2>{category.toUpperCase()} Quiz</h2>

        {showScore ? (
          <div>
            <p>
              Quiz finished! Your score: {score} / {questions.length}
            </p>
            {scoreExplainer(score)}
            <BackHomeEnd tryAgain={resetQuiz} />
          </div>
        ) : (
          <>
            <p className="question">{question.question}</p>

            <div className="options">
              {question.options.map((opt, index) => (
                <button
                  key={index}
                  className="option-btn"
                  onClick={() => handleAnswer(index)}
                >
                  {opt}
                </button>
              ))}
            </div>

            <p>
              Question {current + 1} of {questions.length}
            </p>
          </>
        )}
      </section>
      <BackHome />
    </div>
  );
}

export default Quiz;
