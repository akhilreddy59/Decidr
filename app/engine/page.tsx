import { CustomCursor } from '@/components/CustomCursor';
import { ParticleBackground } from '@/components/ParticleBackground';
import { DecidrApp } from '@/components/DecidrApp';

export default function EnginePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      <ParticleBackground />
      <CustomCursor />
      <DecidrApp />
    </main>
  );
}
