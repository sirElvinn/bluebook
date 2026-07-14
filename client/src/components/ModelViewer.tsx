import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Html } from '@react-three/drei';
import { Suspense } from 'react';
import { Loader2 } from 'lucide-react';
import Model3D from './Model3D';

function CanvasLoader() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-2 text-blue-600">
        <Loader2 className="w-8 h-8 animate-spin" />
        <span className="text-sm font-medium whitespace-nowrap">Loading 3D Model...</span>
      </div>
    </Html>
  )
}

export default function ModelViewer() {
  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[3, 5, 2]} intensity={1.2} />
          <Environment preset="city" />

          <Model3D />

          <OrbitControls
            enableZoom={false}
            minPolarAngle={Math.PI / 2 - 0.90}
            maxPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={-1.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}