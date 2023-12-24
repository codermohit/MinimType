import { useEffect } from "react";
import { useTextGenerator } from "../hooks/useTextGenerator.js";
import Letter from "./Letter";

function Word() {
  // get the string to display
  const displayText = useTextGenerator();

  /**
   * get the current element
   * compare with the pressed key
   * after logical calculations, change the "current" classes using addClasses and removeClasses
   * move the cursor
   */
  useEffect(() => {
    const currentEl = document
      .getElementsByClassName("word current")[0]
      .getBoundingClientRect();
    console.log(currentEl);
  }, []);

  return displayText.map((word, i) => (
    <div
      className={`${
        i === 0 ? "current" : ""
      } word text-base inline-block text-sky-200`}
      key={i}
    >
      <Letter word={word} wordIndex={i} wordLength={word.split("").length} />
      &nbsp;
    </div>
  ));
}
export default Word;
