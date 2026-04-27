"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

const wordsEn = ["typography", "rhythm", "motion", "responsiveness"];
const wordsZh = ["排版细节", "视觉节奏", "交互动效", "响应体验"];

export function TrustStatement() {
  const { language } = useLanguage();
  const [index, setIndex] = useState(0);

  const currentWords = language === 'zh' ? wordsZh : wordsEn;
  const longestWord = currentWords.reduce((a, b) => (a.length > b.length ? a : b));

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % currentWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [currentWords.length]);

  return (
    <p style={{
      margin: 0,
      color: "#71717a",
      fontSize: "0.83em",
      lineHeight: "inherit",
      letterSpacing: "inherit",
      fontWeight: "inherit",
    }}>
      {language === 'zh' ? '我专注于那些能建立起信任的' : 'I care about the details that compound into trust '}
      <span style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        verticalAlign: "baseline",
      }}>
        {/* Invisible spacer: always renders the longest word to reserve space */}
        <span
          aria-hidden="true"
          style={{
            visibility: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {longestWord}
        </span>

        {/* Animated word, absolutely positioned on top of the spacer */}
        <AnimatePresence mode="wait">
          <motion.span
            key={currentWords[index]}
            initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
            transition={{
              duration: 0.4,
              ease: [0.23, 1, 0.32, 1],
            }}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              color: "#71717a",
              whiteSpace: "nowrap",
            }}
          >
            {currentWords[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </p>
  );
}
