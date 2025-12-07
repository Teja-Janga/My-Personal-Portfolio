import React from 'react';
import { DiReact, DiHtml5, DiCss3, DiJavascript1, DiJava, DiPython,
    DiVisualstudio } from 'react-icons/di';
import { FaGithub, FaDatabase } from 'react-icons/fa';
import { SiVite } from 'react-icons/si';

const Technologies = () => {
    return (
        <section id="tech" className="container mx-auto px-4 py-12">
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mb-6
            rounded-full"></div>
            <h2 className="text-4xl font-bold mb-6 text-white">Technologies</h2>
            <p className="text-gray-400 text-xl mb-12 max-w-3xl leading-relaxed">
                I specialize in Front-End development with React and Vite, supported by
                a strong foundation in programming basics and database fundamentals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Frontend Card (Your Main Strength) */}
                <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800
                hover:border-cyan-500 transition-colors group">
                    <div className="mb-4 text-cyan-400 group-hover:text-cyan-300
                    transition-colors">
                        <DiReact size="4rem" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Front-End</h3>
                    <p className="text-gray-400">
                        Building responsive apps with <br />
                        <span className="text-cyan-300">React.js, Vite, HTML5, CSS3</span>
                    </p>
                </div>

                {/* Tools Card */}
                <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800
                hover:border-green-500 transition-colors group">
                    <div className="mb-4 text-green-400 group-hover:text-green-300
                    transition-colors">
                        <FaGithub size="3rem" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Tools</h3>
                    <p className="text-gray-400">
                        Version control & workflows with <br />
                        <span className="text-green-300">GitHub, VS Code, Git Pages</span>
                    </p>
                </div>

                {/* Languages & Basics Card */}
                <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800
                hover:border-orange-500 transition-colors group">
                    <div className="mb-4 text-orange-400 group-hover:text-orange-300
                    transition-colors">
                        <DiJava size="4rem" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Languages</h3>
                    <p className="text-gray-400">
                        Foundational knowledge in <br />
                        <span className="text-orange-300">Java, Python, SQL, C</span>
                    </p>
                </div>

            </div>
            
            {/* Icon Row - Only your actual skills */}
            <div className="flex justify-center flex-wrap gap-8 mt-16 opacity-50
            grayscale hover:grayscale-0 transition-all duration-500">
                <DiReact size="3rem" className="hover:text-cyan-400" title="React" />
                <SiVite size="3rem" className="hover:text-purple-500" title="Vite" />
                <DiJavascript1 size="3rem" className="hover:text-yellow-400" title="JavaScript" />
                <DiHtml5 size="3rem" className="hover:text-orange-500" title="HTML5" />
                <DiCss3 size="3rem" className="hover:text-blue-500" title="CSS3" />
                <DiVisualstudio size="3rem" className="hover:text-blue-400" title="VS Code" />
                <FaDatabase size="2.5rem" className="hover:text-gray-300" title="SQL" />
            </div>

        </section>
    );
};

export default Technologies;
