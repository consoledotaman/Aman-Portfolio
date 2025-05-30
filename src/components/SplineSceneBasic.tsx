
'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { useEffect, useState } from "react";
const roles = [
  "MERN Stack Developer",
  "Open Source Contributor",
  "Freelancer",
  "Software Developer",
];

export function SplineSceneBasic() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setText(currentRole.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentRole.length) {
          setIsDeleting(true);
          setTypingSpeed(1500); // pause after typing full word
        } else {
          setTypingSpeed(100); // typing speed
        }
      } else {
        setText(currentRole.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(300); // small pause before next word
        } else {
          setTypingSpeed(50); // deleting speed
        }
      }
    };

    const timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, typingSpeed]);

  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <p className="text-lg md:text-xl text-purple-400 font-medium mb-4">
            Hi there ,
          </p>
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            i'm Aman Raj
          </h1>
          <p className="text-lg md:text-xl text-purple-400 font-medium mb-4 whitespace-nowrap">
      {text}
      <span className="animate-pulse">|</span> {/* cursor */}
    </p>
          <p className="mt-2 text-neutral-300 max-w-lg">
            Passionate about building modern web applications with cutting-edge technologies. 
            Creating immersive experiences that bridge design and functionality.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
