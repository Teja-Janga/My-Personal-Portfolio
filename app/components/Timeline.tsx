
import React from "react";

const timelineData = [
    {
        year: '2025 (August - October 6-weeks Internship Program)',
        title: 'Front-End Web Development Intern',
        company: 'AICTE - Edunet Foundation (IBM SkillsBuild)',
        description: 'Completed a structured internship focused n HTML, CSS, JavaScript. Built a fully functional Weather Dashboard and learned modern version control workflows with Git/GitHub.',
    },
    {
        year: '2024',
        title: 'Graduated B.Tech (CSE)',
        company: 'Rajeev Gandhi Memorial College of Engineering & Technology',
        description: 'Completed my Bachelor of Technology in Computer Science & Engineering with a CGPA of 6.42.',
    },
    {
        year: '2020',
        title: 'Started Engineering Journey',
        company: 'Rajeev Gandhi Memorial College of Engineering & Technology',
        description: 'Began my journey into the world of Computer Science, discovering a passion for problem-solving and web technologies.',
    },
    {
        year: '2018-2020',
        title: 'Intermediate Education',
        company: 'Sri Chaitanya Boys Junior COllege',
        description: 'Completed my Intermediate education in between this timeline.',
    },
    {
        year: '2018',
        title: 'Completion of School Education',
        company: 'A.P Model School',
        description: 'Completed my School education in between this timeline.',
    },
];

const Timeline = () => {
    return (
        <section id="about" className="container mx-auto px-4 py-20">
            {/* Header */}
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500
            mb-6 rounded-full"></div>
            <h2 className="text-4xl font-bold mb-12 text-white">My Journey</h2>
            {/* Timeline Container */}
            <div className="relative max-w-4xl mx-auto">
                {/* The Vertical Line */}
                <div className="absolute left-4 md:left-1/2 h-full w-1 bg-neutral-800
                transform -translate-x-1/2"></div>
                {/* Timeline Items */}
                {timelineData.map((item, index) => (
                    <div key={index} className={`relative flex flex-col md:flex-row
                        items-center mb-12 ${
                            index % 2 ===0 ? 'md:flex-row-reverse' : ''
                        }`}>
                            {/* The Dot on the Line */}
                            <div className="absolute left-4 md:left-1/2 w-8 h-8
                            bg-neutral-900 border-4 border-cyan-500 rounded-full
                            transform -translate-x-/2 z-10"></div>

                            {/* Empty space for other side */}
                            <div className="flex-1 w-full md:w-1/2"></div>

                            {/* The Card Content */}
                            <div className={`flex-1 w-full md:w-1/2 pl-12 md:pl-0
                                ${index % 2 === 0 ? 'md:pr-12 md:text-right' :
                                'md:pl-12 md:text-left'}`}
                            >
                                <div className="bg-neutral-900 p-6 rounded-2xl border
                                    border-neutral-800 hover:border-cyan-500
                                    transition-colors shadow-lg"
                                >
                                    <span className="inline-block px-3 py-1 mb-2 text-xs
                                        font-bold tracking-wider text-cyan-900 uppercase
                                        bg-cyan-400 rounded-full">{item.year}
                                    </span>
                                    <h3 className="text-xl font-bold text-bold text-white
                                        mb-1">{item.title}
                                    </h3>
                                    <h4 className="text-gray-400 text-sm mb-4
                                        font-semibold">{item.company}
                                    </h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                ))}
            </div>
        </section>
    );
};
export default Timeline;