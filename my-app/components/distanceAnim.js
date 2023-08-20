import { useEffect, useState } from "react";

function DistanceAnimation() {
  const [distance, setDistance] = useState(0);

  // The target distance to reach
  const targetDistance = 1507.3;

  useEffect(() => {
    let currentDistance = 0;
    const animationDuration = 2000; // Adjust the duration as needed
    const framesPerSecond = 60; // Number of animation frames per second
    const increment =
      targetDistance / (animationDuration / 1000) / framesPerSecond;

    const interval = setInterval(() => {
      if (currentDistance < targetDistance) {
        currentDistance += increment;
        setDistance(currentDistance);
      } else {
        clearInterval(interval);
        setDistance(targetDistance); // Ensure the final value is exactly the target
      }
    }, 1000 / framesPerSecond);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return <h3>Total Distance covered(kms): {distance.toFixed(2)}</h3>;
}

export default DistanceAnimation;
