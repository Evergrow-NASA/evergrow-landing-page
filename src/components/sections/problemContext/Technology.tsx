"use client";
import Header from "@/components/wrappers/Header";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef, useState } from "react";
import { Aqua } from "./satelite/Aqua";

const Technology = () => {
  const [isDragging, setIsDragging] = useState(false); // Estado para saber si el objeto está siendo manipulado
  const [isRotating, setIsRotating] = useState(true); // Estado para saber si el objeto está girando
  const controlsRef = useRef<any | null>(null);

  // Controlamos el click izquierdo para detener la rotación y permitir manipulación
  const handlePointerDown = (event: any) => {
    const { clientX } = event;
    const windowWidth = window.innerWidth;

    if (event.button === 0 && clientX > windowWidth / 2) {
      // Verifica que sea el clic izquierdo en la mitad derecha
      setIsDragging(true); // El usuario está manipulando el objeto
      setIsRotating(false); // Detenemos la rotación automática
    }
  };

  // Detecta doble clic para reanudar la rotación automática
  const handleDoubleClick = () => {
    setIsDragging(false); // Dejamos de manipular
    setIsRotating(true); // El objeto vuelve a girar automáticamente
  };

  return (
  <div className="py-20 starry-bg">
      <div className="flex flex-col px-8 md:px-40 xl:px-60">
        <h4>The Role of Technology in</h4>
        <Header
          className="text-center xl:text-left"
          title="Sustainable Agriculture"
        />
        <div className="mt-8">
          <p>
            In the face of these challenges, <b>technology</b> plays a crucial
            role. Solutions such as <b>real-time satellite data</b> allow
            farmers to forecast changes in weather patterns, optimize water use,
            and make more informed decisions. Tools such as{" "}
            <span className="evergrow-text">Evergrow</span> provide farmers with
            the means to anticipate and better respond to climate challenges.
          </p>
          <p className="mt-8">
            According to the World Economic{" "}
            <a href="https://www.weforum.org/agenda/2022/08/drought-water-climate-un/">
              Forum (2020)
            </a>
            , the use of accurate data in agriculture can improve water use
            efficiency by 25%, which could have a significant impact in regions
            most affected by drought{" "}
            <a href="https://www.weforum.org/agenda/2024/03/see-why-we-need-data-to-make-decisions-about-water-and-food/">
              (World Economic Forum, 2020)
            </a>
            .
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="w-full h-[50vh] z-40 pointer-events-none">
          <Canvas
            camera={{ position: [20, 10, 20], fov: 50 }}
            onPointerDown={handlePointerDown} // Detectar cuando el usuario hace clic
            onDoubleClick={handleDoubleClick} // Detectar cuando el usuario hace doble clic
            style={{ backgroundColor: "transparent" }}
          >
            {/* Luz ambiental */}
            <ambientLight intensity={0.4} />
            {/* Luz direccional */}
            {/* Esquina superior derecha */}
            <directionalLight
              position={[15, 15, 15]}
              intensity={1}
              castShadow
            />
            {/* Esquina superior izquierda */}
            <directionalLight
              position={[-15, 15, 15]}
              intensity={1}
              castShadow
            />
            {/* Esquina inferior derecha */}
            <directionalLight
              position={[15, -15, 15]}
              intensity={1}
              castShadow
            />
            {/* Esquina inferior izquierda */}
            <directionalLight
              position={[-15, -15, 15]}
              intensity={1}
              castShadow
            />
            {/* LUCES SOLARES EN LAS ESQUINAS POSTERIOR*/}
            {/* Esquina superior derecha */}
            <directionalLight
              position={[10, 10, -10]}
              intensity={1}
              castShadow
            />
            {/* Esquina superior izquierda */}
            <directionalLight
              position={[-15, 15, -15]}
              intensity={1}
              castShadow
            />
            {/* Esquina inferior derecha */}
            <directionalLight
              position={[15, -10, -15]}
              intensity={1}
              castShadow
            />
            {/* Esquina inferior izquierda */}
            <directionalLight
              position={[-15, -15, -15]}
              intensity={1}
              castShadow
            />
            {/* Esquina inferior izquierda */}
            <directionalLight
              position={[-5, -5, -15]}
              intensity={1}
              castShadow
            />
            {/* Satélite movido a la derecha */}
            <Suspense fallback={null}>
              <RotatingAqua isRotating={isRotating} />
            </Suspense>

            {/* Controles de cámara */}
            <OrbitControls
              ref={controlsRef}
              enableZoom={true}
              enablePan={true}
              enableRotate={isDragging} // Solo permitir rotar mientras el usuario está manipulando el objeto
              enableDamping={true}
              dampingFactor={0.1}
              rotateSpeed={0.4}
              panSpeed={0.5}
            />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

function RotatingAqua({ isRotating }: { isRotating: boolean }) {
  const aquaRef = useRef<any>();

  // Rotar automáticamente cuando el usuario no está manipulando el objeto
  useFrame(() => {
    if (aquaRef.current && isRotating) {
      aquaRef.current.rotation.y += 0.01; // Rotación automática
    }
  });

  return <Aqua ref={aquaRef} scale={0.5} position={[10, 0, 0]} />;
}

export default Technology;
