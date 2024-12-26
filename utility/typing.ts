export const typing = () => {
  const text = document.querySelector(".trm-typed-text") as HTMLElement;

  const words: string[] = [
    "Web Developer",
    "Reactjs developer",
    "Nextjs Developer",
    "UI/UX Designer",
  ];

  setTyper(text, words);

  function setTyper(element: HTMLElement, words: string[]) {
    const LETTER_TYPE_DELAY = 100;
    const WORD_STAY_DELAY = 3000;

    const DIRECTION_FORWARDS = 0;
    const DIRECTION_BACKWARDS = 1;

    let direction: number = DIRECTION_FORWARDS;
    let wordIndex: number = 0;
    let letterIndex: number = 0;

    let wordTypeInterval: NodeJS.Timeout;

    startTyping();

    function startTyping() {
      wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
    }

    function typeLetter() {
      const word = words[wordIndex];

      if (direction === DIRECTION_FORWARDS) {
        letterIndex++;

        if (letterIndex === word.length) {
          direction = DIRECTION_BACKWARDS;
          clearInterval(wordTypeInterval);
          setTimeout(startTyping, WORD_STAY_DELAY);
        }
      } else if (direction === DIRECTION_BACKWARDS) {
        letterIndex--;

        if (letterIndex === 0) {
          nextWord();
        }
      }

      const textToType = word.substring(0, letterIndex);
      element.textContent = textToType;
    }

    function nextWord() {
      letterIndex = 0;
      direction = DIRECTION_FORWARDS;
      wordIndex++;

      if (wordIndex === words.length) {
        wordIndex = 0;
      }
    }
  }

  document.addEventListener("swup:contentReplaced", function () {
    const text = document.querySelector(".trm-typed-text") as HTMLElement;

    const words: string[] = [
      "Web Developer",
      "Reactjs Developer",
      "Nextjs Developer",
      "UI/UX Designer",
    ];

    setTyper(text, words);

    function setTyper(element: HTMLElement, words: string[]) {
      const LETTER_TYPE_DELAY = 100;
      const WORD_STAY_DELAY = 3000;

      const DIRECTION_FORWARDS = 0;
      const DIRECTION_BACKWARDS = 1;

      let direction: number = DIRECTION_FORWARDS;
      let wordIndex: number = 0;
      let letterIndex: number = 0;

      let wordTypeInterval: NodeJS.Timeout;

      startTyping();

      function startTyping() {
        wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
      }

      function typeLetter() {
        const word = words[wordIndex];

        if (direction === DIRECTION_FORWARDS) {
          letterIndex++;

          if (letterIndex === word.length) {
            direction = DIRECTION_BACKWARDS;
            clearInterval(wordTypeInterval);
            setTimeout(startTyping, WORD_STAY_DELAY);
          }
        } else if (direction === DIRECTION_BACKWARDS) {
          letterIndex--;

          if (letterIndex === 0) {
            nextWord();
          }
        }

        const textToType = word.substring(0, letterIndex);
        element.textContent = textToType;
      }

      function nextWord() {
        letterIndex = 0;
        direction = DIRECTION_FORWARDS;
        wordIndex++;

        if (wordIndex === words.length) {
          wordIndex = 0;
        }
      }
    }
  });
};