import Experience from "@/components/Experience";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <div className='flex justify-center items-center h-screen'>

      <Canvas className='h-full w-full'>
        <Experience />
      </Canvas>
    </div>
  );
}
