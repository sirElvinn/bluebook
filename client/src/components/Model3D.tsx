import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { TextureLoader, MeshStandardMaterial } from 'three';
import { useMemo } from 'react';

export default function Model3D() {
  const obj = useLoader(OBJLoader, '/models/base.obj');

  const diffuse = useLoader(TextureLoader, '/models/texture_diffuse.png');
  const normal = useLoader(TextureLoader, '/models/texture_normal.png');
  const roughness = useLoader(TextureLoader, '/models/texture_roughness.png');
  const metallic = useLoader(TextureLoader, '/models/texture_metallic.png');

  const material = useMemo(() => new MeshStandardMaterial({
    map: diffuse,
    normalMap: normal,
    roughnessMap: roughness,
    metalnessMap: metallic,
  }), [diffuse, normal, roughness, metallic]);

  obj.traverse((child: any) => {
    if (child.isMesh) child.material = material;
  });

  return <primitive object={obj} scale={1.4} position={[0, -1.2, 0]} rotation={[0, -0.5, 0]} />;
}