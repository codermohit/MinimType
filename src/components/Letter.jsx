function Letter({ word, wordIndex }) {
  const wordArr = word.split("");
  return wordArr.map((Letter, i) => (
    <span
      className={`${wordIndex === 0 && i === 0 ? "current" : ""}`}
      key={i + wordIndex}
    >
      {Letter}
    </span>
  ));
}
export default Letter;
