import { useNavigate } from "react-router-dom";
import quizCards from "../services/quizCards";
import { CloseSquareOutlined, SearchOutlined } from "@ant-design/icons";
import { useState } from "react";

const cards = quizCards;

function Main() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  function handleChange(e) {
    setInputValue(e.target.value);
  }
  function handleSearch() {
    const result = cards.filter((card) =>
      card.id.toLowerCase().includes(inputValue.toLowerCase()),
    );
    setFilteredData(result);
  }
  function clearInput() {
    setInputValue("");
    setFilteredData([]);
  }

  return (
    <main className="main">
      <div className="search-wrapper">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search quizzes..."
          list="quizzes"
        />
        <button className="clearButton" onClick={clearInput}>
          <CloseSquareOutlined />
        </button>
        <button onClick={handleSearch}>
          <SearchOutlined />
        </button>
      </div>

      <datalist id="quizzes">
        <option value="entertainment"></option>
        <option value="history"></option>
        <option value="geography"></option>
        <option value="science"></option>
        <option value="sports"></option>
        <option value="literature"></option>
        <option value="technology"></option>
        <option value="physics"></option>
        <option value="chemistry"></option>
        <option value="math"></option>
        <option value="music"></option>
        <option value="geology"></option>
        <option value="space"></option>
        <option value="health"></option>
        <option value="food"></option>
        <option value="business"></option>
        <option value="psychology"></option>
        <option value="internet"></option>
      </datalist>

      <div className="cards">
        {(filteredData.length > 0 ? filteredData : cards).map((card) => (
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
