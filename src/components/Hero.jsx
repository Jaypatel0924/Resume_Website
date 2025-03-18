import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Full Stack Developer
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Building robust and scalable web applications with modern technologies.
              Specialized in the MERN stack and passionate about creating exceptional user experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="#projects"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-8 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <Code2 className="text-blue-600 mb-3" size={32} />
                  <h3 className="font-semibold text-lg mb-2 dark:text-white">Frontend</h3>
                  <p className="text-gray-600 dark:text-gray-300">React, JavaScript, Tailwind CSS</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <Server className="text-green-600 mb-3" size={32} />
                  <h3 className="font-semibold text-lg mb-2 dark:text-white">Backend</h3>
                  <p className="text-gray-600 dark:text-gray-300">Node.js, Express, REST APIs</p>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <Database className="text-purple-600 mb-3" size={32} />
                  <h3 className="font-semibold text-lg mb-2 dark:text-white">Database</h3>
                  <p className="text-gray-600 dark:text-gray-300">MongoDB, Mongoose</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <Code2 className="text-red-600 mb-3" size={32} />
                  <h3 className="font-semibold text-lg mb-2 dark:text-white">Tools</h3>
                  <p className="text-gray-600 dark:text-gray-300">Git</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;