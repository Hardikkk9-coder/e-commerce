import { CreatorHero } from '@/components/identities/creator/CreatorHero';
import { CreatorPhilosophy } from '@/components/identities/creator/CreatorPhilosophy';
import { CreatorLooks } from '@/components/identities/creator/CreatorLooks';
import { CreatorWardrobe } from '@/components/identities/creator/CreatorWardrobe';
import { FinalScene } from '@/components/men/FinalScene';

export default function TheCreatorPage() {
  return (
    <div className="w-full">
      <CreatorHero />
      <CreatorPhilosophy />
      <CreatorLooks />
      <CreatorWardrobe />
      {/* Reusing the cinematic final scene for cohesion */}
      <FinalScene />
    </div>
  );
}
