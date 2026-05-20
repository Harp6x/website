import LandingHero from "@/components/LandingHero";
import LoadingScreen from "@/components/LoadingScreen";
import Footer from "@/components/Footer";
import { fetchProfile } from "@/lib/cms";

export const revalidate = 60;

export default async function Home() {
  const profile = await fetchProfile();

  return (
    <div className="grain">
      <LoadingScreen />
      <main>
        <LandingHero profile={profile} />
      </main>
      <Footer profile={profile} />
    </div>
  );
}
