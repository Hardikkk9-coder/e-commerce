import { CityHero } from '@/components/men/CityHero';
import { Moodboard } from '@/components/men/Moodboard';
import { IdentityShop } from '@/components/men/IdentityShop';
import { EditorialFeature } from '@/components/men/EditorialFeature';
import { CollectionShowcase } from '@/components/men/CollectionShowcase';
import { MenNewArrivals } from '@/components/men/MenNewArrivals';
import { FeaturedLooks } from '@/components/men/FeaturedLooks';
import { Craftsmanship } from '@/components/men/Craftsmanship';
import { MenBestSellers } from '@/components/men/MenBestSellers';
import { CityJournal } from '@/components/men/CityJournal';
import { FinalScene } from '@/components/men/FinalScene';

export default function MenPage() {
  return (
    <>
      <CityHero />
      <Moodboard />
      <IdentityShop />
      <EditorialFeature />
      <CollectionShowcase />
      <MenNewArrivals />
      <FeaturedLooks />
      <Craftsmanship />
      <MenBestSellers />
      <CityJournal />
      <FinalScene />
    </>
  );
}
