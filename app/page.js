import Image from 'next/image';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import { AboutSection } from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import ContactUs from './components/ContactUs';
import AchieveSection from './components/AchievementsSection';
import ScrollUpButton from './components/ScrollUpButton';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-950 relative">
      <Navbar />
      <div className="container mt-20 md:mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchieveSection />
        <AboutSection />
        <ProjectSection />
        <ContactUs />
      </div>
      <ScrollUpButton />
    </main>
  );
}
