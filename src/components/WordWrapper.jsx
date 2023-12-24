import { useEffect, useState } from "react";
import Word from "./Word";
import BlurLayer from "./BlurLayer";

function WordWrapper() {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    console.log(isFocused);
  }, [isFocused]);

  return (
    <div
      tabIndex={0}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={`${
        isFocused ? "blur-none" : "cursor-pointer"
      } focus:border-0 focus-border-none focus-outline-none relative font-medium text-lg  p-3 max-w-3xl mt-11 text-wrap mx-auto border-[1px]  max-h-32 box-border overflow-hidden text-slate-300 font-mono bg-[#0369a1]`}
    >
      {!isFocused && <BlurLayer focused={isFocused} />}
      <Word />
    </div>
  );
}

export default WordWrapper;
