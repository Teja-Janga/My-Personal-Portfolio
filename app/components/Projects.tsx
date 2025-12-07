import React from 'react';
import { projects } from '../constants';

const Projects = () => {
    return (
        <section id="projects" className="container mx-auto px-4 py-12">
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500
            mb-6 rounded-full"></div>
            <h2 className="text-4xl font-bold mb-12 text-white">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map(({ id, image, title, description, tags, source, visit }) => (
                // REMOVED overflow-hidden so buttons can't be cut off
                <div key={id} className="bg-neutral-900 rounded-2xl shadow-lg
                shadow-black/50 flex flex-col border border-neutral-800">
                    {/* Image Section */}
                    <div className="w-full h-52 relative group bg-neutral-950 flex
                    items-center justify-center border-b border-neutral-800 shrink-0">
                        <img 
                            src={image} 
                            alt={title} 
                            className="w-full h-full object-contain p-2 group-
                            hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-2xl font-semibold text-center mb-4
                        text-cyan-300">
                            {title}
                        </h3>
                        <div className="w-10 h-1 bg-blue-500 mx-auto mb-6 rounded"></div>
                        <p className="text-gray-400 text-justify leading-relaxed mb-6">
                            {description}
                        </p>

                        {/* Spacer to push buttons to bottom */}
                        <div className="mt-auto">
                            <div className="mb-6">
                                <h4 className="text-center text-gray-400 text-sm mb-2
                                font-semibold tracking-wider">TECH STACK</h4>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 text-xs
                                        font-medium text-cyan-300 bg-cyan-900/20
                                        rounded-full border border-cyan-800/50">
                                        {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-around pt-4 border-t border-
                            neutral-800">
                                <a href={visit} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-white font-bold hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/20">
                                Live Demo
                                </a>
                                <a href={source} target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-cyan-500 rounded-full text-cyan-400 font-bold hover:bg-cyan-900/20 transition-colors">
                                Source Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
