"use client";
import React, { useEffect, useState } from 'react';

function Name() {
  const words = ["Passionate Web Developer","Aspiring UI/UX Designer", "Tech Freelancer", "Uno Expert😎"];
  const [currentWord, setCurrentWord] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100); //typespeed

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!isDeleting) {
      if (currentWord === words[index]) {
        interval = setInterval(() => {
          setIsDeleting(true);
        }, 1000);
      } else {
        interval = setInterval(() => {
          setCurrentWord((prev) => words[index].substring(0, prev.length + 1));
        }, speed);
      }
    } else {
      if (currentWord === "") {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      } else {
        interval = setInterval(() => {
          setCurrentWord((prev) => prev.slice(0, -1));
        }, speed / 2);
      }
    }

    return () => clearInterval(interval);
  }, [currentWord, isDeleting, index, words, speed]);

  return (
    <div className="flex flex-1 flex-col pt-24 sm:pt-32 gap-y-4 justify-center items-center font-mono relative z-10">
      <h1 className="text-4xl sm:text-6xl font-bold text-gray-100 px-4 sm:px-6 text-center">
        Hello! I am <span className="text-blue-500">Subhadip</span>
      </h1>
      <p className="text-lg sm:text-2xl text-gray-500 text-center">
        A <span className="font-bold">{currentWord}</span>
      </p>
    </div>
  );
}

export default Name;