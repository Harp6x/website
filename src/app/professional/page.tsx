import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ProductShowcase from "@/components/ProductShowcase";
import ClaudeReview from "@/components/ClaudeReview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CrossPageNudge from "@/components/CrossPageNudge";
import { fetchProfile, fetchExperiences, fetchProjects, fetchSkills, fetchProducts, fetchSiteSettings } from "@/lib/cms";

export const revalidate = 60;

export const metadata = {
  title: "Uddip Ranjan Das — Professional",
  description: "Cybersecurity, product ownership, threat intelligence, and automation.",
};

export default async function ProfessionalPage() {
  const [profile, experiences, projects, skills, products, settings] = await Promise.all([
    fetchProfile(),
    fetchExperiences(),
    fetchProjects(),
    fetchSkills(),
    fetchProducts(),
    fetchSiteSettings(),
  ]);

  return (
    <div className="grain">
      <Navbar variant="professional" profile={profile} showProducts={settings.enableProductsPage} />
      <CrossPageNudge variant="professional" />
      <main>
        <Hero variant="professional" profile={profile} />
        <About profile={profile} />
        <Experience chapters={experiences} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        {settings.enableProductsPage && <ProductShowcase products={products} variant="professional" />}
        <ClaudeReview profile={profile} />
        <Contact variant="professional" profile={profile} />
      </main>
      <Footer profile={profile} />
    </div>
  );
}
