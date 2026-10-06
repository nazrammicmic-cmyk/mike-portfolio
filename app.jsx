const { useState } = React;

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-container">

                <div className="logo">
                    MyPortfolio
                </div>

                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

            </div>
        </nav>
    );
}


function Hero() {
    return (
        <section className="hero" id="home">

            <div className="hero-content">

                <h1>
                    Hi, I'm <span> Mike Marzan</span>
                </h1>

                <h2>
                    Barchelor of Information Technology
                </h2>

                <p>
                    I create modern, responsive and user-friendly
                    websites using HTML, CSS, JavaScript and React.
                </p>

                <a href="#projects" className="btn">
                    View My Projects
                </a>

            </div>

        </section>
    );
}


function About() {
    return (s
        <section id="about">

            <div className="container">

                <h2 className="section-title">
                    About <span>Me</span>
                </h2>

                <div className="about-content">

                    <div className="about-text">

                        <p>
                            Hello! I'm a student who is passionate about
                            technology and web development.
                        </p>

                        <p>
                            I enjoy creating websites and learning new
                            programming technologies. My goal is to
                            become a skilled professional web developer.
                        </p>

                    </div>

                    <div className="about-card">

                        <h3>My Goal</h3>

                        <p>
                            To continuously improve my programming skills
                            and build useful, creative and responsive
                            web applications.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}


const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "PHP",
    "MySQL",
    "Git",
    "Responsive Design"
];


function Skills() {
    return (
        <section className="skills" id="skills">

            <div className="container">

                <h2 className="section-title">
                    My <span>Skills</span>
                </h2>

                <div className="skills-grid">

                    {skills.map((skill, index) => (

                        <div className="skill" key={index}>

                            <h3>{skill}</h3>

                            <p>
                                Web Development
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}


const projects = [
    {
        title: "Registration Form",
        description:
            "A responsive registration form created using HTML and CSS."
    },
    {
        title: "Student Portfolio",
        description:
            "A personal portfolio website showcasing skills and projects."
    },
    {
        title: "Web Application",
        description:
            "An interactive web application using JavaScript and React."
    }
];


function Projects() {

    return (
        <section id="projects">

            <div className="container">

                <h2 className="section-title">
                    My <span>Projects</span>
                </h2>

                <div className="projects-grid">

                    {projects.map((project, index) => (

                        <div className="project" key={index}>

                            <div className="project-image">
                                💻
                            </div>

                            <div className="project-content">

                                <h3>
                                    {project.title}
                                </h3>

                                <p>
                                    {project.description}
                                </p>

                                <a href="#" className="btn">
                                    View Project
                                </a>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}


function Contact() {

    const [message, setMessage] = useState("");

    function handleSubmit(e) {

        e.preventDefault();

        setMessage(
            "Thank you! Your message has been received."
        );

        e.target.reset();
    }

    return (
        <section className="contact" id="contact">

            <div className="container">

                <h2 className="section-title">
                    Contact <span>Me</span>
                </h2>

                <div className="contact-container">

                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >

                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            required
                        />

                        <textarea
                            placeholder="Your Message"
                            required
                        ></textarea>

                        <button
                            type="submit"
                            className="btn"
                        >
                            Send Message
                        </button>

                    </form>

                    {message && (
                        <p style={{
                            marginTop: "20px",
                            color: "#38bdf8",
                            textAlign: "center"
                        }}>
                            {message}
                        </p>
                    )}

                </div>

            </div>

        </section>
    );
}


function App() {

    return (
        <>
            <Navbar />

            <Hero />

            <About />

            <Skills />

            <Projects />

            <Contact />

            <footer>
                © 2026 Your Name. All Rights Reserved.
            </footer>
        </>
    );
}


const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<App />);