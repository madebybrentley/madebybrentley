export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream">
      <section id="about" className="max-w-4xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl mb-6 text-softblue" style={{ fontFamily: 'Playfair Display' }}>Hi, I'm Brentley</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-10" style={{ fontFamily: 'EB Garamond' }}>
          Welcome to <span className="text-butter font-semibold">Made by Brentley</span> — my digital recipe book. I hope these dishes inspire you to slow down and appreciate the process of creating meals to share with your favorite people, or to enjoy all on your own.
        </p>

        <div className="max-w-3xl mx-auto text-left md:flex md:items-center md:space-x-8">
<img src="/brentleycooking" alt="Brentley cooking in the kitchen" />
            className="rounded-2xl shadow-md mb-8 md:mb-0 md:w-1/2 object-cover"
          />

          <p className="text-lg leading-relaxed text-gray-700 md:w-1/2" style={{ fontFamily: 'EB Garamond' }}>
            Being in the kitchen has been my favorite place to be for as long as I can remember. Rita — best known to me as Ritata — was the woman who babysat me from the time I was an infant until I started kindergarten, and if I’m being honest, she still does to this day. Ritata and I spent our days watching Food Network, crafting, and creating in her kitchen. From homemade playdough to her perfect brownies, her ability to create what seemed like anything and everything is where my passion for food began.
          </p>
        </div>

        <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto mt-10 text-left" style={{ fontFamily: 'EB Garamond' }}>
          My senior year of high school in 2020 ended as the pandemic started. With all the time spent at home, I began baking every day to pass the time. I started an Instagram account called Brentley Bakes to share what I was creating with close friends and family. Before I knew it, people wanted to order baked goods from me. Overnight, Brentley Bakes turned into a cottage bakery selling cupcakes for all occasions, and soon after, I began making cakes as well. I spent almost every weekend in college baking for my customers back home. After college, I got a “big girl job” and put my cottage bakery on hold while I tried to figure out my career — only for that career to lead me right back into a kitchen, just not my own. I had dreams of opening my own bakery, so I thought working in one would be a good place to start. I learned so much more than just baking in my first kitchen and grew to appreciate getting to work at 4:00 a.m. and leaving by noon.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto mt-10 text-left" style={{ fontFamily: 'EB Garamond' }}>
          Now I am 23 and working as a chef on a hunting ranch. This job allows me to do all of my favorite things like being in the kitchen all day making cozy meals and sweet treats, getting outside, and sharing it all with my friends on TikTok and Instagram (thank you, by the way)! I truly believe that God's purpose for me is to serve and create in any way that I can. Because food is my passion, my career feels not only undeniable but also never like a job — it feels like so much more than that. I hope that sharing my recipes brings you as much joy and appreciation for food as it does for me — and if not, at least it will taste good!
        </p>
      </section>
    </main>
  );
}
