import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  Container,
  ISourceOptions,
  MoveDirection,
  OutMode,
  ZIndex,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export const BackgroundParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: true,
      },
      particles: {
        number: {
          value: 300,
        },
        collisions: {
          enable: true,
        },
        color: {
          value: "#FFFFFF",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: {
            min: 0.1,
            max: 0.6,
          },
        },
        size: {
          value: {
            min: 1,
            max: 2,
          },
        },
        move: {
          enable: true,
          speed: 0.2,
          direction: "top",
          straight: true,
          warp: true,
        },
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          push: {
            quantity: 10,
          },
        },
      },
      absorbers: {
        draggable: true,
        size: {
          value: {
            min: 5,
            max: 10,
          },
          limit: 10,
        },
        position: {
          x: 50,
          y: 50,
        },
      },

      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};
