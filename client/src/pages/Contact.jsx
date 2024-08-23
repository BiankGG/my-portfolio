import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      subject: subject,
      message: message,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "http://localhost:8000/api/send";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();
      console.log(resData);
      if (response.status === 200) {
        console.log("Message sent.");
        alert("Message sent successfully!");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        console.log("Failed to send message.");
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the message.");
    }
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-16 py-32 gap-12 justify-center items-center mx-auto max-w-6xl px-6">
      <div className="flex flex-col items-center md:items-start">
        <h5 className="text-4xl font-bold text-white my-6">Let's Connect</h5>
        <p className="text-white mb-8 max-w-xl text-xl leading-relaxed">
          I am a junior developer with a strong desire to learn and grow in this
          fascinating world of technology. I am looking for a company that
          trusts me and gives me the opportunity to develop and contribute
          within their team. My motivation is to learn and contribute, and I am
          ready to face new challenges.
        </p>
        <div className="flex flex-row gap-8">
          <a
            href="https://www.linkedin.com/in/bianca-g-griffin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="images/link.png"
              alt="LinkedIn Icon"
              className="w-12 h-12"
            />
          </a>
          <a
            href="https://github.com/BiankGG"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="images/icone-github-rose.png"
              alt="GitHub Icon"
              className="w-12 h-12"
            />
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <form
          className="flex flex-col w-full max-w-2xl"
          onSubmit={handleSubmit}
        >
          <div className="mb-10">
            <label
              htmlFor="email"
              className="text-white block mb-4 text-xl font-medium"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-gray-600 border-pink-400 placeholder-purple-500 text-gray-100 text-xl rounded-lg block w-full p-4"
              placeholder="xxxxxx@google.com"
            />
          </div>
          <div className="mb-10">
            <label
              htmlFor="subject"
              className="text-white block mb-4 text-xl font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="bg-gray-600 border-pink-400 placeholder-purple-500 text-gray-100 text-xl rounded-lg block w-full p-4"
              placeholder="Reaching out for..."
            />
          </div>
          <div className="mb-10">
            <label
              htmlFor="message"
              className="text-white block text-xl mb-4 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="bg-gray-600 border-pink-400 placeholder-purple-500 text-gray-100 text-xl rounded-lg block w-full p-4"
              placeholder="Hi Bianca, I'd like to talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-700 text-white font-medium py-4 px-6 rounded-lg w-full text-xl"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
