import { useCallback, useMemo } from "react";

export const useTextGenerator = () => {
  const displayText = useCallback(() => {
    const words =
      "life is a journey full of twists and turns sometimes surprising other times predictable but always intriguing and worth living despite the challenges faced along the way".split(
        " "
      );
    let displayString = words[Math.ceil(Math.random() * words.length - 1)];
    for (let i = 0; i < 180; i++) {
      const random = Math.ceil(Math.random() * words.length - 1);
      displayString = displayString + " " + words[random];
    }

    return displayString.split(" ");
  }, []);
  const wordArr = useMemo(() => displayText(), [displayText]);

  return wordArr;
};
