import { useState, useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(
    () => random.inSphere(new Float32Array(4000), { radius: 1.2 }) // Adjust number of points
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  useEffect(() => {
    return () => {
      if (ref.current) {
        ref.current.geometry.dispose();
        ref.current.material.dispose();
      }
    };
  }, []);

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#00cea8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const MobileBackground = () => (
  <div style={{ width: "100%", height: "100%", backgroundColor: "#000" }}></div> // Example mobile background
);

const StarsCanvas = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleContextLost = (event) => {
      event.preventDefault();
      console.warn(
        "WebGL context lost. Consider reinitializing your application."
      );
    };

    window.addEventListener("webglcontextlost", handleContextLost);

    return () => {
      window.removeEventListener("webglcontextlost", handleContextLost);
    };
  }, []);

  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      {isMobile ? (
        <MobileBackground /> // Render a different background for mobile
      ) : (
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>

          <Preload all />
        </Canvas>
      )}
    </div>
  );
};

export default StarsCanvas;
