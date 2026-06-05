import { CommuterHero } from '@/components/identities/commuter/CommuterHero';
import { CommuterPhilosophy } from '@/components/identities/commuter/CommuterPhilosophy';
import { CommuterLooks } from '@/components/identities/commuter/CommuterLooks';
import { CommuterWardrobe } from '@/components/identities/commuter/CommuterWardrobe';
import { FinalScene } from '@/components/men/FinalScene';

export default function TheCommuterPage() {
  return (
    <div className="w-full">
      <CommuterHero />
      <CommuterPhilosophy />
      <CommuterLooks />
      <CommuterWardrobe />
      {/* Reusing the cinematic final scene from the Men's category for cohesion */}
      <FinalScene />
    </div>
  );
}
