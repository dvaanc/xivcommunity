import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import ParticleEffectsContainer from '../../../styles/Constants/ParticleEffectsStyles'

export default function ParticleEffects() {
  const particlesInit = async(main) => {
    await loadFull(main)
  }
  return (
    <ParticleEffectsContainer>
      <Particles 
      id="tsparticles"
      style={{ height: '70px' }}
      init={particlesInit}
      options={{
        fullScreen: false,
        fpsLimit: 60,
        background: {
          color: "#1A1A1A"
        },
        backgroundMode: {
          enable: false
        },
        particles: {
          color: { value: ["#565A8B", '#753081', '#C5A4D2']},
          move: {
            direction: "none",
            enable: true,
            outModes: "out",
            random: false,
            speed: 0.85,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 900
            },
            value: 90
          },
          opacity: {
            animation: {
              enable: false,
              speed: 0.05,
              sync: true,
              startValue: "max",
              count: 1,
              destroy: "min"
            },
            value: {
              min: 0.2,
              max: 1
            }
          },
          shape: {
            type: "circle"
          },
          size: {
            value: { min: 0.3, max: 1.8 }
          }
        }
      }}
    />
      </ParticleEffectsContainer>
)
  
}
