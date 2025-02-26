import { useEffect, useState } from "react";
import "./Joke.css";
const Joke = () => {
  const [joke, setJoke] = useState(false);
  const getJoke = async () => {
    try {
      const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json", // Make sure to set the correct headers
        },
      });
      const data = await response.json();
      console.log(data);
      setJoke(data.joke);
    } catch (error) {}
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div className="main-card">
      <h1 className="title">Dads Joke</h1>
      <p className="joke-container">{joke}</p>
      <button className="btn" onClick={getJoke}>
        New Joke
      </button>
    </div>
  );
};

export default Joke;
