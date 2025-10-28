import { Instagram, Music2 } from "lucide-react";

export default function ConnectPage() {
  return (
    <main className="min-h-screen">
      <section id="connect" className="max-w-3xl mx-auto py-20 px-6 text-center">
        <h2 className="text-4xl mb-8 text-softblue" style={{ fontFamily: 'Playfair Display' }}>Let's Connect</h2>
        <p className="text-xl leading-relaxed text-gray-700 mb-16" style={{ fontFamily: 'EB Garamond' }}>
          I’d love to hear from you — whether it’s about a recipe, a collaboration, or just to say hello! You can reach me directly through email or connect with me on social media below.
        </p>

        <div className="mt-16">
          <p className="text-2xl text-gray-700 mb-4" style={{ fontFamily: 'EB Garamond' }}>Reach me directly:</p>
          <a href="mailto:madebybrentley@gmail.com" className="text-softblue text-2xl hover:underline block mb-12 transition-transform hover:scale-105" style={{ fontFamily: 'EB Garamond' }}>madebybrentley@gmail.com</a>

          <div className="flex justify-center items-center space-x-3">
            <a href="https://www.instagram.com/madebybrentley" target="_blank" rel="noopener noreferrer" className="text-butter hover:text-softblue transition transform hover:scale-110">
              <Instagram className="w-7 h-7" />
            </a>
            <a href="https://www.tiktok.com/@madebybrentley" target="_blank" rel="noopener noreferrer" className="text-butter hover:text-softblue transition transform hover:scale-110">
              <Music2 className="w-7 h-7" />
            </a>
            <span className="text-2xl text-butter ml-2" style={{ fontFamily: 'EB Garamond' }}>@madebybrentley</span>
          </div>
        </div>
      </section>
    </main>
  );
}
