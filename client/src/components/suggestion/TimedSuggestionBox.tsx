import React, { FC, useEffect, useState } from 'react';

interface BetterArrowSuggestionBoxProps {
  suggestion: string;
  targetButtonId: string;
}

const TimedSuggestionBox: FC<BetterArrowSuggestionBoxProps> = ({ suggestion, targetButtonId }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 5000); // 5000 milliseconds (5 seconds)

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {visible && (
        <div className="position-relative">
          <div className="absolute z-10 animate-bounce">
            <div className="w-12 h-8 bg-amber-300 absolute top-12 left-0 -mt-4 translate-x-16 translate-y-2 transform -rotate-45" />
            <div className="bg-amber-300 text-zinc-800 p-4 top-12 rounded-lg shadow-md relative -translate-x-8" style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
              <p className="text-sm font-medium">{suggestion}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TimedSuggestionBox;
