import { useState, useEffect, useCallback } from "react";
import words from "./wordList.json";
import HangManDrawing from "./HangManDrawing";
import HangManKeyboard from "./HangManKeyboard";
import HangManWord from "./HangManWord";
function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);

  const [guessedLetters, setGuessedLetters] = useState<string[]>(["g"]);
  const inCorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  const isLoser = inCorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);
  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;
      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  });
  function getWord() {
    return words[Math.floor(Math.random() * words.length)];
  }
  return (
    <>
      <div className="m-auto flex max-w-[800px] flex-col items-center gap-8 p-5">
        {isWinner && (
          <div className="absolute z-50 m-10 right-0 text-2xl rounded px-3 p-4 border-b-4 border-l-2 shadow-lg bg-green-400 border-green-600 text-white">
            Winner! Press Enter to play again
          </div>
        )}
        {isLoser && (
          <div className="absolute z-50 m-10 right-0 text-2xl rounded px-3 p-4 border-b-4 border-l-2 shadow-lg bg-red-400 border-red-600 text-white">
            Lost! Press Enter to try again
          </div>
        )}

        <HangManDrawing numberOfGuesses={inCorrectLetters.length} />
        <HangManWord
          reveal={isLoser}
          guessedLetters={guessedLetters}
          wordToGuess={wordToGuess}
        />
        <HangManKeyboard
          disabled={isWinner || isLoser}
          activeLettters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={inCorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </>
  );
}

export default App;
