type HangmanWordPros = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};
export default function HangManWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordPros) {
  return (
    <div className="flex gap-3  space-x-3 text-6xl font-semibold uppercase tracking-widest text-black">
      {wordToGuess.split("").map((letter, index) => (
        <span className="w-10 h-20 border-b-[10px] border-black" key={index}>
          <span
            className={`${
              guessedLetters.includes(letter) || reveal
                ? " visible "
                : " hidden "
            }${
              !guessedLetters.includes(letter) && reveal
                ? " text-red-500 "
                : " text-green-400 "
            }`}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
