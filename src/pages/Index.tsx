"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import FloatingNavBar from "@/components/FloatingNavBar";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <FloatingNavBar />
      <HeroSection />

      <main className="container mx-auto p-8 pt-24 md:pt-32 lg:pt-40 relative z-10">
        <section className="bg-card/90 backdrop-blur-sm rounded-xl shadow-2xl p-8 md:p-12 mb-16 border border-border">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 text-center leading-tight">
            Discover the Rich History of Johnston, Iowa
          </h2>
          <p className="text-lg md:text-xl font-sans text-foreground mb-8 text-center max-w-3xl mx-auto">
            Johnston, Iowa, is more than just fields and farms. It's a community built on a foundation of resilience, innovation, and a deep connection to its roots. Explore the stories that shaped our town, from its early settlers to its modern-day vibrancy.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-secondary/50 p-6 rounded-lg shadow-md border border-border">
              <h3 className="text-2xl font-serif text-primary mb-3">Early Beginnings</h3>
              <p className="font-sans text-foreground">
                Learn about the pioneers who first settled this fertile land, establishing the foundations of what would become Johnston. Their struggles and triumphs laid the groundwork for generations to come.
              </p>
            </div>
            <div className="bg-secondary/50 p-6 rounded-lg shadow-md border border-border">
              <h3 className="text-2xl font-serif text-primary mb-3">Agricultural Heritage</h3>
              <p className="font-sans text-foreground">
                Delve into Johnston's strong agricultural past, understanding how farming shaped its economy, culture, and the very landscape of our community.
              </p>
            </div>
            <div className="bg-secondary/50 p-6 rounded-lg shadow-md border border-border">
              <h3 className="text-2xl font-serif text-primary mb-3">Growth and Innovation</h3>
              <p className="font-sans text-foreground">
                Trace Johnston's evolution from a small farming community to a thriving modern town, marked by significant developments and a spirit of innovation.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card/90 backdrop-blur-sm rounded-xl shadow-2xl p-8 md:p-12 mb-16 border border-border">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 text-center leading-tight">
            Explore Our Interactive Timeline
          </h2>
          <p className="text-lg md:text-xl font-sans text-foreground mb-8 text-center max-w-3xl mx-auto">
            Journey through the decades with our interactive timeline, highlighting key events, influential figures, and pivotal moments in Johnston's history.
          </p>
          <div className="flex justify-center">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              View Timeline
            </button>
          </div>
        </section>

        <section className="bg-card/90 backdrop-blur-sm rounded-xl shadow-2xl p-8 md:p-12 border border-border">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 text-center leading-tight">
            Share Your Story
          </h2>
          <p className="text-lg md:text-xl font-sans text-foreground mb-8 text-center max-w-3xl mx-auto">
            Do you have a personal connection to Johnston's history? We invite you to share your memories, photos, and stories to enrich our collective narrative.
          </p>
          <div className="flex justify-center">
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              Submit Your Story
            </button>
          </div>
        </section>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Index;