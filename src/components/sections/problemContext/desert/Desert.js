import React, { useRef, useMemo, useState } from 'react'
import { useFrame, useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import * as THREE from 'three'

export function Desert(props) {
  const { scene } = useGLTF('/desert_op.glb')
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const desertRef = useRef()

  // Crear un array para almacenar las piedras, con menos cantidad y caída más lenta
  const [fallingRocks, setFallingRocks] = useState(() => {
    return Array.from({ length: 10 }, () => ({
      position: [Math.random() * 0.5 - 0.25, -0.1, Math.random() * 0.5 - 0.25], // Posiciones iniciales aleatorias cerca de la base
      velocity: Math.random() * 0.005 + 0.002, // Velocidad de caída más lenta
    }))
  })

  // Rotar el modelo Desert en su propio eje
  useFrame(() => {
    if (desertRef.current) {
      desertRef.current.rotation.y += 0.01
    }

    // Actualizar la posición de las piedras que caen
    setFallingRocks((rocks) =>
      rocks.map((rock) => {
        let newY = rock.position[1] - rock.velocity
        if (newY < -2) {
          // Reiniciar la piedra si cae demasiado bajo
          return {
            ...rock,
            position: [Math.random() * 0.5 - 0.25, -0.1, Math.random() * 0.5 - 0.25],
          }
        }
        return {
          ...rock,
          position: [rock.position[0], newY, rock.position[2]],
        }
      })
    )
  })

  return (
    <group ref={desertRef} {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_0.geometry} material={materials.Material_0} />
      <mesh geometry={nodes.trunk.geometry} material={materials.trunk} position={[0.005, 0, 0.101]} />
      <mesh geometry={nodes.Stone_and_dry_bark_surface.geometry} material={materials.kameokura_fin_u1_v1} position={[0.125, 0.207, 0.248]} rotation={[Math.PI, 0, Math.PI]} scale={[0.238, 0.275, 0.24]} />
      <mesh geometry={nodes.dry_branches_medium_01_c.geometry} material={materials.dry_branches_medium_01} position={[0.45, 0.049, -0.051]} />
      <mesh geometry={nodes.dry_branches_medium_01_b.geometry} material={materials.dry_branches_medium_01} position={[0.017, 0.061, -0.063]} />
      <mesh geometry={nodes.dry_branches_medium_01_a.geometry} material={materials.dry_branches_medium_01} position={[-0.41, 0.124, -0.055]} scale={0.417} />
      <group position={[0.203, 0.221, 0.292]} rotation={[Math.PI, 0, Math.PI]} scale={0.298}>
        <mesh geometry={nodes.Mesh_0001.geometry} material={materials['Material_0.001']} />
        <mesh geometry={nodes.Mesh_0001_1.geometry} material={materials['Material_0.001']} />
      </group>

      {/* Añadir las piedras que caen, con menos cantidad y caída lenta */}
      {fallingRocks.map((rock, index) => (
        <mesh key={index} position={rock.position}>
          <sphereGeometry args={[0.02, 16, 16]} />
          <meshStandardMaterial color="#C19A6B" /> {/* Color marrón claro */}
        </mesh>
      ))}
    </group>
  )
}

useGLTF.preload('/desert_op.glb')