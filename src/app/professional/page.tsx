import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { fetchProfile, fetchExperiences, fetchProjects, fetchSkills } from "@/lib/cms";

export const revalidate = 60;

export const metadata = {
  title: "Uddip Ranjan Das — Professional",
  description: "Cybersecurity, product ownership, threat intelligence, and automation.",
};

export default async function ProfessionalPage() {
  const [profile, experiences, projects, skills] = await Promise.all([
    fetchProfile(),
    fetchExperiences(),
    fetchProjects(),
    fetchSkills(),
  ]);

  return (
    <div className="grain">
      <Navbar variant="professional" profile={profile} />
      <main>
        <Hero variant="professional" profile={profile} />
        <About profile={profile} />
        <Experience chapters={experiences} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact variant="professional" profile={profile} />
      </main>
      <Footer profile={profile} />
    </div>
  );
}
