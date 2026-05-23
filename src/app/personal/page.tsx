import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PersonalAbout from "@/components/PersonalAbout";
import Philosophy from "@/components/Philosophy";
import LifePillars from "@/components/LifePillars";
import BeyondWork from "@/components/BeyondWork";
import Journal from "@/components/Journal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CrossPageNudge from "@/components/CrossPageNudge";
import { fetchProfile, fetchBeyondWork, fetchPhilosophies, fetchJournalTopics, fetchPersonalAbout, fetchLifePillars } from "@/lib/cms";

export const revalidate = 60;

export const metadata = {
  title: "Uddip Ranjan Das — Personal",
  description:
    "Travel, exploration, philosophy, vehicle builds, and the documented pursuit of a non-average life.",
};

export default async function PersonalPage() {
  const [profile, beyondWork, philosophies, journalTopics, personalAbout, lifePillars] = await Promise.all([
    fetchProfile(),
    fetchBeyondWork(),
    fetchPhilosophies(),
    fetchJournalTopics(),
    fetchPersonalAbout(),
    fetchLifePillars(),
  ]);

  return (
    <div className="personal-warm">
      <Navbar variant="personal" profile={profile} />
      <CrossPageNudge variant="personal" />
      <main>
        <Hero variant="personal" profile={profile} />
        <PersonalAbout data={personalAbout} />
        <Philosophy philosophies={philosophies} />
        <LifePillars pillarsData={lifePillars} profile={profile} />
        <BeyondWork sections={beyondWork} />
        <Journal topics={journalTopics} />
        <Contact variant="personal" profile={profile} />
      </main>
      <Footer profile={profile} />
    </div>
  );
}
