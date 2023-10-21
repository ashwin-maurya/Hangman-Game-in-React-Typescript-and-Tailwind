type KeyBoardProps = {
  activeLettters: string[];
  inactiveLetters: string[];
  disabled: boolean;
  addGuessedLetter: (letter: string) => void;
};
export default function HangManKeyboard({
  activeLettters,
  inactiveLetters,
  disabled,
  addGuessedLetter,
}: KeyBoardProps) {
  const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let btnActive = " bg-green-400 border-green-600 text-white ";
  let btnInactive = " opacity-20 ";
  return (
    <div className="flex flex-wrap justify-center ">
      {KEYS.map((key) => {
        const isActive = activeLettters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`m-1 w-10 flex h-10 items-center justify-center rounded px-3 p-4 border-b-4 border-l-2 shadow-lg bg-blue-700 border-blue-800 text-white enabled:hover:text-white uppercase ${
              isActive ? btnActive : ""
            } ${isInactive ? btnInactive : ""}`}
            key={key}
            disabled={isActive || isInactive || disabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
