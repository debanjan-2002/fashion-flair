import React, { FC, useEffect, useState } from 'react';

interface BetterArrowSuggestionBoxProps {
  suggestion: string;
  targetButtonId: string;
}

const BetterArrowSuggestionBox: FC<BetterArrowSuggestionBoxProps> = ({ suggestion, targetButtonId }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 10000); // 5000 milliseconds (5 seconds)

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {visible && (
        <div className="absolute inline-block z-10 animate-bounce">
          <div className="w-8 h-8 bg-amber-300 absolute top-20 left-1/2 transform -translate-x-1/2 -mt-4 rotate-45" />
          <div className="bg-amber-300 text-zinc-800 p-4 rounded-lg shadow-md relative top-20">
            <p className="text-sm font-medium">{suggestion}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default BetterArrowSuggestionBox;
