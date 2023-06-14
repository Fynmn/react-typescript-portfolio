import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesConfig from "../components/particles/particles.json";

const ParticlesBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <Particles
      className="h-full object-cover fixed w-full"
      canvasClassName="will-change-auto h-full"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesConfig as any}
      // options={{
      //   background: {
      //     color: {
      //       value: "#ffffff",
      //     },
      //   },
      //   fpsLimit: 120,
      //   interactivity: {
      //     events: {
      //       onClick: {
      //         enable: true,
      //         mode: "push",
      //       },
      //       onHover: {
      //         enable: true,
      //         mode: "repulse",
      //       },
      //       resize: true,
      //     },
      //     modes: {
      //       push: {
      //         quantity: 4,
      //       },
      //       repulse: {
      //         distance: 200,
      //         duration: 0.4,
      //       },
      //     },
      //   },
      //   particles: {
      //     color: {
      //       value: "#eab308",
      //     },
      //     links: {
      //       color: "#ffffff",
      //       distance: 150,
      //       enable: false,
      //       opacity: 0.5,
      //       width: 1,
      //     },
      //     collisions: {
      //       enable: true,
      //     },
      //     move: {
      //       direction: "none",
      //       enable: true,
      //       outModes: {
      //         default: "bounce",
      //       },
      //       random: false,
      //       speed: 0.6,
      //       straight: false,
      //     },
      //     number: {
      //       density: {
      //         enable: true,
      //         area: 800,
      //       },
      //       value: 80,
      //     },
      //     opacity: {
      //       value: 0.5,
      //     },
      //     shape: {
      //       type: "triangle",
      //     },
      //     size: {
      //       value: { min: 1, max: 4 },
      //     },
      //   },
      //   detectRetina: true,
      // }}
    />
  );
};

export default ParticlesBackground;
