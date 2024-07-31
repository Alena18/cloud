import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, onBallTouch }) => {
  // Use useMemo to prevent unnecessary re-renders of the texture
  const decal = useTexture(imgUrl);

  return (
    <Float
      speed={1.75}
      rotationIntensity={1}
      floatIntensity={2}
      onClick={onBallTouch}
      onPointerDown={onBallTouch}
    >
      <ambientLight intensity={0.75} />
      <directionalLight position={[0, 0, 0.05]} intensity={2} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#804dee"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, onBallTouch }) => {
  // Use useMemo to avoid unnecessary Canvas re-renders
  const canvasProps = useMemo(
    () => ({
      frameloop: "demand",
      dpr: [1, 2],
      gl: { preserveDrawingBuffer: true },
    }),
    []
  );

  return (
    <Canvas {...canvasProps}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} onBallTouch={onBallTouch} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
