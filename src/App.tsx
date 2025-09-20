import React from "react";
import Navbar from "./Navbar";
import MyButton from "./MyButton";
import Footer from "./Footer";
import { motion } from "framer-motion";

function App() {
  const handleClick = (msg: string) => {
    alert(msg);
  };

  return (
    <div className="font-sans">
      <Navbar />

      {/* Hero Section */}
      <motion.div
        id="home"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col justify-center items-center text-center text-white min-h-[100vh] bg-cover bg-center px-6 py-20"
        style={{
          backgroundImage:
            "url('https://t4.ftcdn.net/jpg/01/85/58/17/360_F_185581700_CNwpjWkJjYUAzIvsg82fYvMMcIB27Se9.jpg')",
        }}
      >
        <motion.h1
          className="text-[4rem] md:text-[6rem] font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-orange-500">Welcome to </span>
          <span className="text-white">TailorCraft</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Custom Suits, Dresses, Alterations & More{" "}
          <strong>"Where every stitch tells a story of elegance."</strong>
        </motion.p>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <MyButton
            title="See Our Work"
            onClick={() => handleClick("Hello from React!")}
          />
        </motion.div>
      </motion.div>

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-stone-500 min-h-screen flex flex-col justify-center items-center text-center px-6 py-16"
      >
        <motion.h2
          className="text-5xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          About
        </motion.h2>
        <motion.p
          className="text-lg mb-4 max-w-2xl text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Welcome to Jennels Tailoring, where 10 years of experience meets
          craftsmanship and style. We specialize in custom-made clothing designed
          to fit you perfectly and reflect your unique personality.
        </motion.p>
        <motion.p
          className="text-lg max-w-2xl text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          From casual wear to formal attire, we tailor garments to make you look
          and feel your best. At Jennels Tailoring, we believe that great clothes
          inspire confidence. Let us bring your fashion vision to life, one
          perfect fit at a time.
        </motion.p>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="pt-32 pb-16 bg-stone-950"
      >
        <motion.h2
          className="text-5xl text-center font-bold mb-10 text-stone-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Services
        </motion.h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-4 gap-9">
          {/* Service 1 */}
          <motion.div
            className="bg-orange-500 rounded-lg shadow-md p-5 flex flex-col items-justify"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://t3.ftcdn.net/jpg/04/35/90/22/360_F_435902263_avYC31K0WWCYh9Abr0PBJgMf5ueRpSfF.jpg"
              alt="Fabric & Design Consultation"
              className="mb-4 rounded"
            />
            <h3 className="font-bold text-xl mb-2">Fabric & Design Consultation</h3>
            <p>
              Expert advice on selecting fabrics, patterns, and designs. Helps bring
              your fashion ideas to life with a professional finish.
            </p>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            className="bg-orange-500 rounded-lg shadow-md p-6 flex flex-col items-justify"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="https://media.istockphoto.com/id/525061117/photo/sewing-accessories.jpg?s=612x612&w=0&k=20&c=U-17eWsRaHHLl-PNvwI75RvSNDmX9yggrb2RkCtDdEE="
              alt="Custom Tailoring"
              className="mb-10 rounded"
            />
            <h3 className="font-bold text-xl mb-2">Custom Tailoring</h3>
            <p>
              Perfectly tailored outfits for everyday wear or special occasions.
              Dresses, suits, shirts, and traditional wear.
            </p>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            className="bg-orange-500 rounded-lg shadow-md p-6 flex flex-col items-justify"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img
              src="https://acleanerworld.com/sites/default/files/2022-02/GettyImages-862120160.jpg"
              alt="Alterations & Repairs"
              className="mb-4 rounded"
            />
            <h3 className="font-bold text-xl mb-2">Alterations & Repairs</h3>
            <p>
              Adjusting sizes, hemming, and fixing damaged garments. Ensures your
              favorite clothes always fit flawlessly.
            </p>
          </motion.div>

          {/* Service 4 */}
          <motion.div
            className="bg-orange-500 rounded-lg shadow-md p-6 flex flex-col items-justify"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img
              src="https://www.montagio.com.au/display.php?o=15207"
              alt="Event Wear"
              className="mb-4 rounded"
            />
            <h3 className="font-bold text-xl mb-2">Event Wear</h3>
            <p>Wedding, prom, and formal attire tailored to your style and measurements.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="min-h-screen flex flex-col justify-center items-center px-6 py-16 bg-gray-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-font-sans text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>
        <motion.p
          className="mb-6 text-center max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Have questions or want to get in touch? Fill out the form below and we’ll get back to you as soon as possible.
        </motion.p>

        <motion.form
          className="w-full max-w-md flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white p-3 rounded hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </motion.form>
      </motion.section>

      <Footer />
    </div>
  );
}

export default App;
