import { useNavigate } from "react-router-dom";
import quizCards from "../services/quizCards";

const cards = quizCards;

function Main() {
  const navigate = useNavigate();

  return (
    <main className="main">
      <h2>All Questions</h2>

      <div className="cards">
        {cards.map((card) => (
          <div
            key={card.id}
            className="card"
            onClick={() => navigate(`/quiz/${card.id}`)}
          >
            <img src={card.image} alt="" />
            <h3>{card.title}</h3>
            <p>5 questions</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Main;
