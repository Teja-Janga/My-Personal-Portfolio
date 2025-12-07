
// import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#0F1624] text-white flex flex-col
        items-center justify-center">
            <Hero />
            <Projects />
            <Technologies />
            <Timeline />
            <Footer />
        </main>
    );
}