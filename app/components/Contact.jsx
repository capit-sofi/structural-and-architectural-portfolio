"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { FaLinkedin, FaTelegramPlane } from "react-icons/fa";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_x7of8ha",
        "template_ni5t1lc",
        form.current,
        "IV6M0LXTQ6Ia21yRe"
      )
      .then(
        () => {
          setLoading(false);
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setStatus("Failed to send message.");
          console.log(error);
        }
      );
  };

  return (
    <section className="container mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-12">

        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Let's Connect
          </h2>

          <div className="flex gap-4">
            <Link href="https://www.linkedin.com/in/sofi-bim/" target="_blank">
              <FaLinkedin className="w-10 h-10 text-blue-600" />
            </Link>

            <Link href="https://t.me/sofis_man/" target="_blank">
              <FaTelegramPlane className="w-10 h-10 text-blue-400" />
            </Link>
          </div>
        </div>

        {/* FORM */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-[#1a1a1a] p-8 rounded-xl space-y-6"
        >

          {/* EMAIL (IMPORTANT: name="email") */}
          <div>
            <label className="text-white">Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 mt-2 bg-[#1f1f1f] text-white rounded-lg"
            />
          </div>

          {/* SUBJECT (IMPORTANT: name="text") */}
          <div>
            <label className="text-white">Subject</label>
            <input
              type="text"
              name="text"
              required
              className="w-full p-3 mt-2 bg-[#1f1f1f] text-white rounded-lg"
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="text-white">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full p-3 mt-2 bg-[#1f1f1f] text-white rounded-lg"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#00adb5] hover:bg-[#008188] text-white py-3 rounded-lg"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="text-center text-green-400 text-sm">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;