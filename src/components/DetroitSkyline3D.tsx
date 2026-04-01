import { useRef, useEffect, useCallback } from "react";
import * as THREE from "three";

/* ── Building data: x, z, width, depth, height ── */
const BUILDINGS: [number, number, number, number, number][] = [
  // Downtown core – tall towers
  [0, 0, 1.2, 1.2, 8.5],
  [2.2, 0.5, 1.0, 1.0, 7.2],
  [-1.8, -0.3, 0.9, 0.9, 6.8],
  [1.0, -1.5, 1.4, 1.4, 9.2],
  [-0.5, 1.2, 1.1, 1.1, 7.8],
  [3.5, -0.8, 0.8, 0.8, 5.5],
  [-3.0, 0.8, 1.0, 1.0, 6.0],
  // Mid-rise ring
  [4.5, 1.0, 0.7, 0.7, 4.2],
  [-4.2, -1.0, 0.8, 0.8, 3.8],
  [1.5, 2.5, 0.9, 0.9, 4.5],
  [-2.5, -2.0, 0.7, 0.7, 3.5],
  [3.0, 2.0, 0.6, 0.6, 3.0],
  [-1.0, -2.8, 0.8, 0.8, 3.2],
  [5.0, -1.5, 0.6, 0.6, 2.8],
  [-5.0, 1.5, 0.7, 0.7, 3.0],
  // Outer low-rise
  [6.0, 0, 0.5, 0.5, 2.0],
  [-6.0, 0, 0.5, 0.5, 1.8],
  [0, 3.5, 0.6, 0.6, 2.2],
  [0, -3.5, 0.5, 0.5, 1.6],
  [4.0, 3.0, 0.5, 0.5, 1.5],
  [-4.0, -3.0, 0.5, 0.5, 1.7],
  [2.5, -3.0, 0.6, 0.6, 2.0],
  [-2.0, 3.0, 0.5, 0.5, 1.9],
  // Accent structures
  [7.0, 1.5, 0.4, 0.4, 1.2],
  [-7.0, -1.5, 0.4, 0.4, 1.0],
  [5.5, 2.5, 0.4, 0.4, 1.4],
  [-5.5, -2.5, 0.4, 0.4, 1.3],
];

const TEAL = new THREE.Color("hsl(173, 85%, 33%)");
const TEAL_DIM = new THREE.Color("hsl(173, 85%, 18%)");
const DARK = new THREE.Color("#0A0A0C");

const DetroitSkyline3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const targetProgressRef = useRef(0);
  const frameRef = useRef(0);

  const init = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();
    scene.background = null; // transparent
    scene.fog = new THREE.FogExp2(DARK.getHex(), 0.04);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      35,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(12, 8, 14);
    camera.lookAt(0, 2, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Ground grid
    const gridHelper = new THREE.GridHelper(20, 40, TEAL_DIM, TEAL_DIM);
    (gridHelper.material as THREE.Material).opacity = 0.15;
    (gridHelper.material as THREE.Material).transparent = true;
    scene.add(gridHelper);

    // Ground plane (subtle reflection)
    const groundGeo = new THREE.PlaneGeometry(30, 30);
    const groundMat = new THREE.MeshStandardMaterial({
      color: DARK,
      metalness: 0.8,
      roughness: 0.4,
      transparent: true,
      opacity: 0.6,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.01;
    scene.add(ground);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x111111, 0.5);
    scene.add(ambientLight);

    const tealLight = new THREE.PointLight(TEAL.getHex(), 2, 30);
    tealLight.position.set(0, 12, 0);
    scene.add(tealLight);

    const rimLight = new THREE.DirectionalLight(0x1a3a4a, 0.8);
    rimLight.position.set(-10, 8, -5);
    scene.add(rimLight);

    const fillLight = new THREE.PointLight(TEAL.getHex(), 0.5, 20);
    fillLight.position.set(8, 4, 8);
    scene.add(fillLight);

    // Buildings
    interface BuildingMesh {
      mesh: THREE.Mesh;
      edges: THREE.LineSegments;
      targetHeight: number;
      delay: number;
    }

    const buildings: BuildingMesh[] = [];

    BUILDINGS.forEach(([x, z, w, d, h], i) => {
      const geo = new THREE.BoxGeometry(w, h, d);
      geo.translate(0, h / 2, 0);

      const mat = new THREE.MeshStandardMaterial({
        color: new THREE.Color("#0d0d0f"),
        metalness: 0.9,
        roughness: 0.3,
        transparent: true,
        opacity: 0.85,
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, 0, z);
      mesh.scale.y = 0.001; // start flat

      // Wireframe edges
      const edgeGeo = new THREE.EdgesGeometry(geo);
      const edgeMat = new THREE.LineBasicMaterial({
        color: TEAL,
        transparent: true,
        opacity: 0.35,
      });
      const edges = new THREE.LineSegments(edgeGeo, edgeMat);
      edges.position.copy(mesh.position);
      edges.scale.y = 0.001;

      scene.add(mesh);
      scene.add(edges);

      // Stagger delay based on distance from center
      const dist = Math.sqrt(x * x + z * z);
      buildings.push({
        mesh,
        edges,
        targetHeight: 1,
        delay: dist * 0.06 + i * 0.015,
      });
    });

    // Window lights (small emissive planes on buildings)
    const windowLights: THREE.Mesh[] = [];
    BUILDINGS.forEach(([x, z, w, , h]) => {
      const numWindows = Math.floor(h * 1.5);
      for (let j = 0; j < numWindows; j++) {
        const winGeo = new THREE.PlaneGeometry(0.08, 0.12);
        const winMat = new THREE.MeshBasicMaterial({
          color: TEAL,
          transparent: true,
          opacity: 0,
        });
        const win = new THREE.Mesh(winGeo, winMat);

        const side = Math.random() > 0.5 ? 1 : -1;
        const face = Math.random() > 0.5;
        if (face) {
          win.position.set(
            x + (Math.random() - 0.5) * w * 0.7,
            0.5 + Math.random() * h * 0.8,
            z + (w / 2 + 0.01) * side
          );
        } else {
          win.position.set(
            x + (w / 2 + 0.01) * side,
            0.5 + Math.random() * h * 0.8,
            z + (Math.random() - 0.5) * w * 0.7
          );
          win.rotation.y = Math.PI / 2;
        }

        scene.add(win);
        windowLights.push(win);
      }
    });

    // Scan line (horizontal teal plane that sweeps up)
    const scanGeo = new THREE.PlaneGeometry(30, 0.05);
    const scanMat = new THREE.MeshBasicMaterial({
      color: TEAL,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide,
    });
    const scanLine = new THREE.Mesh(scanGeo, scanMat);
    scanLine.rotation.x = -Math.PI / 2;
    scanLine.position.y = 0;
    scene.add(scanLine);

    // Scroll-driven progress via IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            targetProgressRef.current = entry.intersectionRatio;
          } else {
            targetProgressRef.current = 0;
          }
        });
      },
      { threshold: Array.from({ length: 20 }, (_, i) => i / 19) }
    );

    // Observe section parent
    const section = container.closest("section");
    if (section) observer.observe(section);

    // Also track scroll position for finer control
    const handleScroll = () => {
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.max(
        0,
        Math.min(1, (vh - rect.top) / (vh + rect.height))
      );
      targetProgressRef.current = progress;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Animate
    const clock = new THREE.Clock();

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth progress
      progressRef.current +=
        (targetProgressRef.current - progressRef.current) * 0.05;
      const p = progressRef.current;

      // Grow buildings based on progress
      buildings.forEach((b) => {
        const t = Math.max(0, Math.min(1, (p - b.delay) * 3));
        const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        b.mesh.scale.y = 0.001 + eased * 0.999;
        b.edges.scale.y = b.mesh.scale.y;
      });

      // Window lights fade in
      windowLights.forEach((w, i) => {
        const flickerPhase = Math.sin(elapsed * 2 + i * 1.7) * 0.5 + 0.5;
        const targetOpacity = p > 0.3 ? flickerPhase * 0.6 : 0;
        const mat = w.material as THREE.MeshBasicMaterial;
        mat.opacity += (targetOpacity - mat.opacity) * 0.05;
      });

      // Scan line
      scanLine.position.y = (Math.sin(elapsed * 0.5) * 0.5 + 0.5) * 10;
      (scanLine.material as THREE.MeshBasicMaterial).opacity =
        0.15 + Math.sin(elapsed * 0.8) * 0.1;

      // Subtle camera rotation
      camera.position.x = 12 + Math.sin(elapsed * 0.15) * 0.8;
      camera.position.z = 14 + Math.cos(elapsed * 0.12) * 0.6;
      camera.lookAt(0, 2, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  useEffect(() => {
    // Delay init to ensure container has dimensions after layout
    let cleanup: (() => void) | undefined;
    const timer = requestAnimationFrame(() => {
      cleanup = init() ?? undefined;
    });
    return () => {
      cancelAnimationFrame(timer);
      cleanup?.();
    };
  }, [init]);

  return (
    <div
      className="absolute right-0 top-0 bottom-0 pointer-events-none z-[2] overflow-hidden hidden lg:block"
      style={{ width: "52%" }}
    >
      {/* Canvas container */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />

      {/* Left fade blend */}
      <div
        className="absolute top-0 left-0 bottom-0 z-[20]"
        style={{
          width: "40%",
          background: "linear-gradient(to right, hsl(0 0% 5%), transparent)",
        }}
      />

      {/* Scan-line overlay */}
      <div
        className="absolute inset-0 z-[10] pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, hsla(173,85%,33%,0.08) 2px, hsla(173,85%,33%,0.08) 4px)",
        }}
      />

      {/* Detroit label */}
      <div className="absolute bottom-8 right-8 z-[25] text-right">
        <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-primary/40">
          Detroit & Beyond
        </p>
        <div className="w-8 h-px bg-primary/20 mt-2 ml-auto" />
      </div>
    </div>
  );
};

export default DetroitSkyline3D;
