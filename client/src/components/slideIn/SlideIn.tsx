import React from "react";
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(2.5rem) rotateX(-25deg);
  }

  to {
    opacity: 1;
    transform: translateY(0) rotateX(0deg);
  }
`;

function SlideIn({
    children,
    delay,
    duration,
    damping,
}: {
    children: React.ReactNode;
    delay: number;
    duration?: number;
    damping?: number;
}) {
    return (
        <Reveal
            keyframes={slideIn}
            cascade
            damping={damping ?? 0.1}
            delay={delay}
            triggerOnce
            duration={duration ? duration : 1000}
        >
            {children}
        </Reveal>
    );
}

export default SlideIn;
