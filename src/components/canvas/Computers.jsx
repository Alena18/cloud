import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import styled from "styled-components";

const Computers = ({ isMobile, onClick }) => {
  const computer = useGLTF("./cloud_test/scene.gltf");
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
  const x = center[0] + radius * Math.cos(rotationAngle);
  const z = center[2] + radius * Math.sin(rotationAngle);

  return (
    <group
      onClick={handleClick}
      position={[x, initialPosition[1], z]}
      rotation={[0, rotationAngle, 0]}
    >
      <mesh rotation={[0, 0, 0]}>
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
          object={computer.scene}
          scale={isMobile ? 0.7 : 0.75}
          position={isMobile ? [0, -4, 3] : [0, -4, 1.5]}
        />
      </mesh>
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  const handleSceneClick = () => {
    setShowButton(false);
  };

  return (
    <>
      {showButton && (
        <button className="button" onClick={() => setShowButton(false)}>
          Click the Cloud
        </button>
      )}
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 10, 14], fov: 30 }}
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
