import { Hero } from '@/components/sections/Hero';
import { CategoryDiscovery } from '@/components/sections/CategoryDiscovery';
import { FeaturedDrop } from '@/components/sections/FeaturedDrop';
import { NewArrivals } from '@/components/sections/NewArrivals';
import { EditorialStory } from '@/components/sections/EditorialStory';
import { BestSellers } from '@/components/sections/BestSellers';
import { SocialProof } from '@/components/sections/SocialProof';
import { Newsletter } from '@/components/sections/Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryDiscovery />
      <FeaturedDrop />
      <NewArrivals />
      <EditorialStory />
      <BestSellers />
      <SocialProof />
      <Newsletter />
    </>
  );
}
