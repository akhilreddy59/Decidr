'use client';

/* eslint-disable react-hooks/purity */

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function HeroParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 10000;

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    // Deep Amethyst #534AB7, Violet #8B5CF6, White #FFFFFF
    const color1 = new THREE.Color('#534AB7');
    const color2 = new THREE.Color('#8B5CF6');
    const color3 = new THREE.Color('#FFFFFF');

    for (let i = 0; i < count; i++) {
      // Create a spherical distribution with some noise
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      // Base radius with some variation to create depth
      const r = 2.5 + (Math.random() - 0.5) * 0.8;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions.set([x, y, z], i * 3);

      // Mix colors based on position and randomness
      const mixRatio = Math.random();
      let finalColor;
      if (mixRatio < 0.6) {
        finalColor = color1.clone().lerp(color2, Math.random());
      } else if (mixRatio < 0.9) {
        finalColor = color2;
      } else {
        finalColor = color3;
      }
      
      colors.set([finalColor.r, finalColor.g, finalColor.b], i * 3);
    }
    return [positions, colors];
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      // Cinematic slow rotation
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.02;
      
      // Subtle pulsing effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
      pointsRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
