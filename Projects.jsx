const projects = [
  {
    title: "Quizzins",
    desc: "A React quiz app offering multiple categories for users to test their knowledge."
  },
  {
    title: "Calculator App",
    desc: "A fully functional calculator built using React Native with a clean UI."
  },
  {
    title: "Basketball Site",
    desc: "A React-based app to help users learn about basketball through its players and teams."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-sky-300 via-blue-400 to-blue-300">
      <div className="max-w-6xl mx-auto px-6" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">React + React Native Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-xl border border-blue-100 transition transform hover:-translate-y-1 hover:scale-105 duration-300"
            >
              <h3 className="text-xl font-bold text-teal-700">{p.title}</h3>
              <p className="text-gray-600 mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
