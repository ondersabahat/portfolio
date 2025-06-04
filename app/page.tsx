import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-700 to-blue-400 text-white px-8 py-12">
      <header className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
        <div className="space-y-4 max-w-xl">
          <h1 className="text-5xl md:text-6xl font-extrabold">Önder Şabahat</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-100">
            Developer & Medical Doctor
          </h2>
          <p className="text-lg md:text-xl text-blue-200">
            I am a developer and medical doctor with a passion for building
            applications and improving healthcare through technology.
          </p>
          <div className="space-x-4 mt-6">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full font-medium shadow-lg transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-white text-white px-5 py-2 rounded-full font-medium hover:bg-white hover:text-blue-800 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="mt-10 md:mt-0">
          <Image
            src="/portfolio.jpg"
            alt="Önder Şabahat"
            width={256}
            height={256}
            className="rounded-full w-64 h-64 border-4 border-white shadow-lg object-cover"
          />
        </div>
      </header>
      <section id="projects" className="mt-20 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-6">Projects</h3>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white text-black p-6 rounded-lg shadow-md">
            <h4 className="font-bold text-xl mb-2">Crypto Trading Bot</h4>
            <p className="text-sm">
              Designed and implemented an AI-driven trading bot using Python and
              TensorFlow. Integrated with Binance API.
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md">
            <h4 className="font-bold text-xl mb-2">Finance Tracker App</h4>
            <p className="text-sm">
              Developed a React Native app to track personal finances. Built
              with Firebase and NativeWind.
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md">
            <h4 className="font-bold text-xl mb-2">Clinician Dashboard</h4>
            <p className="text-sm">
              Built a simple dashboard with Streamlit to visualize patient
              statistics and basic ML predictions.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mt-24 max-w-xl mx-auto">
        <h3 className="text-3xl font-bold mb-4 text-center">Contact Me</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 rounded-lg bg-white text-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg bg-white text-black"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full px-4 py-2 rounded-lg bg-white text-black"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
