import { useState } from "react";

//Hook for the Left/Right chevrons

export const useCarousel = (items) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? prev : prev + 1));
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex === items.length - 1;

  return {
    currentIndex,
    handlePrev,
    handleNext,
    goToIndex,
    isAtStart,
    isAtEnd,
    items,
  };
};
