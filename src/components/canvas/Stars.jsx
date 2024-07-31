import { useState, useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = ({ isMobile, ...props }) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(isMobile ? 500 : 2000), { radius: 1.2 })
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
          size={isMobile ? 0.001 : 0.002} // Adjust size for mobile
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

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
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
