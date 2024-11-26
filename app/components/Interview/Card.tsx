import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  MotionValue,
} from "framer-motion";
import styles from "./style.module.scss";

interface CardProps {
  title: string;
  description: string;
  src: string;
  url?: string;
  color: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
  i: number;
}

const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);

  const progressMotionValue = useMotionValue(progress.get());
  const rangeMotionValue = useMotionValue(range[1]);

  const imageScale = useTransform(progress, [0, 1], [2, 1]);
  const scale = useTransform(
    progressMotionValue,
    [0, rangeMotionValue.get()],
    [1, targetScale]
  );

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        <img src={src} alt={title} />
        <h1>{title}</h1>
        <p>{description}</p>
        <a href={url}>Learn more</a>
      </motion.div>
    </div>
  );
};

export default Card;
