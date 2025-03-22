"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Enjoy on your TV",
    description:
      "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    video: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v",
    image: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
  },
  {
    title: "Download your shows to watch offline",
    description: "Save your favorites easily and always have something to watch.",
    image: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
  },
  {
    title: "Watch everywhere",
    description:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    video: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v",
    image: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png",
  },
  {
    title: "Create profiles for kids",
    description:
      "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
    image: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f",
  },
];

export function Features() {
  return (
    <section className="relative w-full bg-black text-white">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="container flex flex-col items-center gap-8 border-b-8 border-[#232323] py-16 md:flex-row md:py-24"
        >
          <div
            className={`flex flex-1 flex-col items-center gap-4 text-center md:items-start md:text-left ${
              index % 2 === 1 ? "md:order-2" : ""
            }`}
          >
            <h2 className="text-3xl font-bold md:text-5xl">{feature.title}</h2>
            <p className="text-lg md:text-2xl">{feature.description}</p>
          </div>
          
          <div className="relative flex-1">
            <img
              src={feature.image}
              alt={feature.title}
              className="relative z-10 w-full"
            />
            {feature.video && (
              <video
                className="absolute left-1/2 top-1/2 h-[100%] w-[100%] -translate-x-1/2 -translate-y-1/2 object-contain"
                autoPlay
                playsInline
                muted
                loop
              >
                <source src={feature.video} type="video/mp4" />
              </video>
            )}
          </div>
        </motion.div>
      ))}
    </section>
  );
}