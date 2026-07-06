import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import Model3D from './Model3D';

export default function ModelViewer() {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
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