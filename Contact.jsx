export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-tl from-yellow-300 via-orange-400 to-red-300 text-center">
      <div className="max-w-3xl mx-auto px-6" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-6 text-white">Contact Me</h2>
        <p className="text-lg text-white mb-4">
          Let’s build something together! I'm open to freelance work, collaborations, or just a good conversation about frontend development.
        </p>
        <p className="text-white mb-4">
          Whether you're a fellow developer, a startup founder, or someone with a great idea, I’d love to hear from you.
        </p>
        <a href="mailto:madhuwanthsai@gmail.com" className="block text-blue-800 font-semibold hover:text-blue-600">
          madhuwanthsai@gmail.com
        </a>
        <a
          href="https://github.com/madhusai2020"
          className="block text-green-800 font-semibold hover:text-green-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/madhusai2020
        </a>
      </div>
    </section>
  );
}
