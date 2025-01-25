const Contact = () => {
  return (
    <section id="contact" className="py-20 px-8 bg-gray-800">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
      <form className="max-w-3xl mx-auto bg-gray-700 p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-lg mb-2">Name</label>
          <input type="text" className="w-full p-3 rounded-lg" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2">Email</label>
          <input type="email" className="w-full p-3 rounded-lg" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2">Message</label>
          <textarea className="w-full p-3 rounded-lg" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button className="w-full p-3 bg-blue-500 rounded-lg text-lg font-bold hover:bg-blue-600">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;