import { FC, useEffect, useState } from 'react';

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
  <div className="absolute inline-block z-10 animate-bounce">
    <div className="w-12 h-8 bg-amber-300 absolute top-20 left-0 -mt-4 -translate-x-[7.25rem] translate-y-2 transform -rotate-45" />
    <div className="bg-amber-300 text-zinc-800 p-4 rounded-lg shadow-md relative top-20 -translate-x-[13.25rem]" style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
      <p className="text-sm font-medium ">{suggestion}</p>
    </div>
  </div>
)}


    </>
  );
};

export default TimedSuggestionBox;
