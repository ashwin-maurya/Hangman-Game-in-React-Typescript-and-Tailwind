const HEAD = (
  <div className="absolute right-[-20px] top-[50px] h-[50px] w-[50px] rounded-full border-[10px] border-red-500 bg-red-500"></div>
);
const BODY = (
  <div className="absolute right-[0px] top-[100px] h-[100px] w-[10px] bg-red-500"></div>
);
const RIGHT_ARM = (
  <div className="absolute right-[-100px] top-[150px] h-[10px] w-[100px] origin-bottom-left rotate-[-30deg] bg-red-500"></div>
);
const LEFT_ARM = (
  <div className="absolute right-[10px] top-[150px] h-[10px] w-[100px] origin-bottom-right rotate-[30deg] bg-red-500"></div>
);
const RIGHT_LEG = (
  <div className="absolute right-[-90px] top-[190px] h-[10px] w-[100px] origin-bottom-left rotate-[60deg] bg-red-500"></div>
);
const lEFT_LEG = (
  <div className="absolute right-[0px] top-[190px] h-[10px] w-[100px] origin-bottom-right rotate-[-60deg] bg-red-500"></div>
);
const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, lEFT_LEG];
type HangmanDrawingProps = {
  numberOfGuesses: number;
};
export default function HangManDrawing({
  numberOfGuesses,
}: HangmanDrawingProps) {
  return (
    <>
      <div className="relative">
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div className="absolute right-0 top-0 h-[50px] w-[10px] bg-blue-700 "></div>
        <div className="ml-[120px] h-[10px] w-[200px] bg-blue-700 rounded-tl-md "></div>
        <div className="ml-[120px] h-[400px] w-[10px] bg-blue-700 "></div>
        <div className="h-4 w-[250px] bg-blue-700  rounded-sm"></div>
      </div>
    </>
  );
}
