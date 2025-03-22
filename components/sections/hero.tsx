"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden md:min-h-screen">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          poster="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/US-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        >
          <source
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative flex min-h-[85vh] items-center justify-center md:min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container text-center text-white"
        >
          <h1 className="mx-auto max-w-4xl text-3xl font-bold md:text-5xl lg:text-6xl">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="mt-4 text-lg md:text-2xl">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="mt-6 text-lg md:text-2xl">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-6 flex max-w-[600px] flex-col gap-4 px-4 md:flex-row md:gap-2"
          >
            <Input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 border-white/30 bg-black/40 text-white placeholder:text-white/70 md:h-14"
            />
            <Button
              size="lg"
              className="bg-primary text-lg font-medium text-white hover:bg-primary/90 md:h-14 md:px-8"
            >
              Get Started
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}