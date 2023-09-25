import { useEffect } from "react";
import { FadeInAnimation } from "./animation.js";


export default function useFadeIn(ref, duration) {
  useEffect(() => {
    const animation = new FadeInAnimation(ref.current)
    animation.start(duration)
    return () => {
      animation.stop()
    }
  }, [ref, duration])
}