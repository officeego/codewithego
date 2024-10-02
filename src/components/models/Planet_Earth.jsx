/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
"use client";
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Planet_Earth = React.memo(function Planet_Earth(props) {
  // Use React.memo for performance optimization
  // const { nodes, materials } = useGLTF("/models/drone_gltf.glb");
  const { nodes, materials, animations } = useGLTF('/models/planet_earth.glb')
  // const { actions } = useAnimations(animations, group)
  // const modelRef = useRef();
  const group = useRef()

  useFrame(() => {
    group.current.rotation.y += 0.007;
  });

  return (
   <group ref={group} {...props} dispose={null}  >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="6c9739b702654f608e512cbfad62b594fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Light"
                  position={[29887.678, -7574.368, -38906.539]}
                  rotation={[-0.914, 0.322, 2.872]}
                  scale={[-4833.145, -4833.144, -4833.144]}>
                  <group name="Object_5" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_6" />
                  </group>
                </group>
                <group
                  name="Earth_Diffuse_6K"
                  position={[-17582.217, -9180.59, -26405.576]}
                  rotation={[Math.PI / 2, 0, 2.408]}
                  scale={[-42794.527, -42794.539, -42794.535]}>
                  <mesh
                    name="Earth_Diffuse_6K_Earth_Diffuse_6Kmain_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Earth_Diffuse_6K_Earth_Diffuse_6Kmain_0.geometry}
                    material={materials['Earth_Diffuse_6K.main']}
                  />
                </group>
                <group
                  name="Earth_Diffuse_6K001"
                  position={[-17582.217, -9180.59, -26405.576]}
                  rotation={[Math.PI / 2, 0, 2.904]}
                  scale={[-42976.477, -42976.484, -42976.484]}>
                  <mesh
                    name="Earth_Diffuse_6K001_Earth_Diffuse_6K001_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Earth_Diffuse_6K001_Earth_Diffuse_6K001_0.geometry}
                    material={materials['Earth_Diffuse_6K.001']}
                  />
                  <mesh
                    name="Earth_Diffuse_6K001_Earth_Diffuse_6K001_0_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Earth_Diffuse_6K001_Earth_Diffuse_6K001_0_1.geometry}
                    material={materials['Earth_Diffuse_6K.001']}
                  />
                  <mesh
                    name="Earth_Diffuse_6K001_Earth_Diffuse_6K001_0_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Earth_Diffuse_6K001_Earth_Diffuse_6K001_0_2.geometry}
                    material={materials['Earth_Diffuse_6K.001']}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
});

export default Planet_Earth;
useGLTF.preload("/models/planet_earth.glb");
