
import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import RoadmapSection from '../components/RoadmapSection';
import WhitepaperSection from '../components/WhitepaperSection';
import LinksSection from '../components/LinksSection';
import Footer from '../components/Footer';

const Index = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const id = href.substring(1);
          const element = document.getElementById(id);
          if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80; // Offset for header
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Intersection Observer for animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-10');
      observer.observe(el);
    });

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <RoadmapSection />
        <WhitepaperSection />
        <LinksSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
