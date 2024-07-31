import React, { Suspense, useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

// Component to handle the rotating computer model
const Computers = ({ isMobile, onClick }) => {
  const { scene: computer } = useGLTF("./cloud_test/scene.gltf");
  const [isRotating, setIsRotating] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(Math.PI); // Start angle at the left side
  const radius = 6; // Radius for the circular path
  const center = [0, 0, 0]; // Center point of the circular rotation
  const initialPosition = [0, 0, -10]; // Adjust this based on your scene

  const handleClick = () => {
    setIsRotating(!isRotating);
    if (onClick) onClick();
  };

  const rotate = () => {
    setRotationAngle((prevAngle) => prevAngle + 0.006); // Speed adjustment
  };

  useEffect(() => {
    let animationFrameId;
    if (isRotating) {
      const animate = () => {
        rotate();
        animationFrameId = requestAnimationFrame(animate);
      };
      animationFrameId = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(animationFrameId);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [isRotating]);

  // Calculate the new position based on rotation angle and radius
  const x = useMemo(
    () => center[0] + radius * Math.cos(rotationAngle),
    [rotationAngle, radius, center]
  );
  const z = useMemo(
    () => center[2] + radius * Math.sin(rotationAngle),
    [rotationAngle, radius, center]
  );

  return (
    <group
      onClick={handleClick}
      position={[x, initialPosition[1], z]}
      rotation={[0, rotationAngle, 0]}
    >
      <mesh>
        <hemisphereLight intensity={0.15} groundColor="black" />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={7} />
        <primitive
          object={computer}
          scale={isMobile ? 0.7 : 0.75}
          position={isMobile ? [0, -4, 3] : [0, -4, 1.5]}
        />
      </mesh>
    </group>
  );
};

// Component to manage the canvas and responsiveness
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSceneClick = () => {
    setShowButton(false);
  };

  return (
    <>
      {showButton && (
        <button className="button" onClick={handleSceneClick}>
          Click the Cloud
        </button>
      )}
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 10, 14], fov: isMobile ? 45 : 30 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            enableRotate={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} onClick={handleSceneClick} />
        </Suspense>
        <Preload all />
      </Canvas>
    </>
  );
};

export default ComputersCanvas;
