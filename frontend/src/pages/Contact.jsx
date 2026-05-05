import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });
    setIsSending(true);

    try {
      await emailjs.sendForm(
        "service_muv5dmd",
        "template_bvmrkvw",
        form.current,
        "37P4K2_YeUKMnr524"
      );
      setStatus({ type: "success", message: "Message sent successfully." });
      form.current?.reset();
    } catch {
      setStatus({
        type: "error",
        message: "Could not send your message right now. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="animate-fade-up min-h-screen py-8" id="contact">
      <div className="mb-12 text-center">
        <p className="terminal-heading mb-2">// contact</p>
        <h1 className="font-mono text-4xl font-extrabold text-white">$ ./new_message.sh</h1>
        <p className="mt-2 text-lg text-slate-300">
          Feel free to reach out for collaborations or product partnerships.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="terminal-panel p-8">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="mb-2 block font-medium text-slate-200">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Your Name"
                className="w-full rounded-md border border-emerald-300/20 bg-slate-900/70 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block font-medium text-slate-200">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-md border border-emerald-300/20 bg-slate-900/70 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block font-medium text-slate-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder="Your message..."
                className="w-full rounded-md border border-emerald-300/20 bg-slate-900/70 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
            <button
              type="submit"
              disabled={isSending}
              className="terminal-button-primary disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
            {status.message && (
              <p
                className={`text-sm ${
                  status.type === "success" ? "text-emerald-300" : "text-rose-300"
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
        <div className="flex flex-col justify-center">
          <div className="mb-6 flex items-center gap-4 text-slate-200">
            <FaEnvelope className="text-2xl text-emerald-300" />
            <span className="text-lg">zararafridi9091@gmail.com</span>
          </div>
          <div className="mb-6 flex items-center gap-4 text-slate-200">
            <FaMapMarkerAlt className="text-2xl text-emerald-300" />
            <span className="text-lg">Peshawar, Pakistan</span>
          </div>
          <div className="mt-6 flex items-center gap-6">
            <a
              href="https://github.com/zararafridi"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="text-slate-200 transition hover:text-emerald-300"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="https://linkedin.com/in/zararafridi"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="text-slate-200 transition hover:text-emerald-300"
            >
              <FaLinkedin className="text-3xl" />
            </a>
          </div>
          <div className="mt-8 rounded-md border border-emerald-300/20 bg-emerald-500/10 p-5 text-slate-200">
            Typically replies within 24 hours. For urgent work, include project timeline and
            budget range in your message.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
