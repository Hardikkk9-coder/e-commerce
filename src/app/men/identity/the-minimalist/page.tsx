import { MinimalistHero } from '@/components/identities/minimalist/MinimalistHero';
import { MinimalistPhilosophy } from '@/components/identities/minimalist/MinimalistPhilosophy';
import { MinimalistLooks } from '@/components/identities/minimalist/MinimalistLooks';
import { MinimalistWardrobe } from '@/components/identities/minimalist/MinimalistWardrobe';
import { FinalScene } from '@/components/men/FinalScene';

export default function TheMinimalistPage() {
  return (
    <div className="w-full bg-[#fdfdfd]">
      <MinimalistHero />
      <MinimalistPhilosophy />
      <MinimalistLooks />
      <MinimalistWardrobe />
      {/* Reusing the cinematic final scene for cohesion */}
      <FinalScene />
    </div>
  );
}
