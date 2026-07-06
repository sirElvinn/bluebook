import { useGLTF } from '@react-three/drei';

export default function Model3D() {
  const { scene } = useGLTF('/models/base_basic_pbr.glb');
  return <primitive object={scene} scale={1.4} position={[0, -1.4, 0]} rotation={[0, -0.5, 0]} />;
}
