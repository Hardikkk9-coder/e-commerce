import { ExecutiveHero } from '@/components/identities/executive/ExecutiveHero';
import { ExecutivePhilosophy } from '@/components/identities/executive/ExecutivePhilosophy';
import { ExecutiveLooks } from '@/components/identities/executive/ExecutiveLooks';
import { ExecutiveWardrobe } from '@/components/identities/executive/ExecutiveWardrobe';
import { FinalScene } from '@/components/men/FinalScene';

export default function TheExecutivePage() {
  return (
    <div className="w-full bg-[#0a0a0a]">
      <ExecutiveHero />
      <ExecutivePhilosophy />
      <ExecutiveLooks />
      <ExecutiveWardrobe />
      {/* Reusing the cinematic final scene for cohesion */}
      <FinalScene />
    </div>
  );
}
