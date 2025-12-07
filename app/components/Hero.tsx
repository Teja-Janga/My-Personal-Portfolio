import Link from "next/link";

const Hero = () => {
    return (
        <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row
        items-center justify-between min-h-[80vh]">
            {/* Left Side: Text */}
            <div className="flex-1 flex flex-col gap-6 max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r
                from-white to-gray-500 bg-clip-text text-transparent">
                    Welcome to my Personal Portfolio. And I'm <span className="
                    bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text
                    text-transparent">
                        Teja Janga
                    </span>
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                    An aspiring Front-End Developer with hands-on experience in JavaScript
                    and React. I will always try my level best to write clean code and build
                    functional applications. Always learning and building <span
                    className="bg-gradient-to-r from-purple-200 to-pink-400 bg-clip-text
                    text-transparent font-semibold">#LearningbyDoing.</span>
                </p>
                <Link href="#projects">
                    <button className="w-fit px-12 py-4 rounded-full bg-gradient-to-r
                    from-purple-600 to-pink-600 text-white font-bold text-lg hover:scale-105
                    hover:opacity-90 transition-all shadow-lg shadow-purple-500/30">
                        Learn More
                    </button>
                </Link>
            </div>

            {/* Right Side: Animation Placeholder */}
            <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
                {/* We will add the animation here */}
                <div className="w-64 h-64 rounded-full bg-gradient-to-tr
                from-purple-500/20 to-blue-500/20 animate-pulse"></div>
            </div>
        </section>
    );
}

export default Hero;