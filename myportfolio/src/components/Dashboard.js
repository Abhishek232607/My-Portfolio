// // import React, { useState } from 'react';
// // import './Dashboard.css';
// // import profileImg from '../assets/profile.png';
// // import resumePdf from '../assets/resume.pdf';
// // import projectGif from '../assets/projects.gif';
// // import experienceGif from '../assets/experience.gif';
// // import techGif from '../assets/tech.gif';

// // const Dashboard = () => {
// //   const [showContact, setShowContact] = useState(false);

// //   const handleContactClick = () => {
// //     setShowContact(!showContact);
// //   };

// //   return (
// //     <div className="dashboard-container">
// //       <div className="dashboard-profile">
// //         <img src={profileImg} alt="Profile" className="dashboard-profile-img" />
// //       </div>

// //       <div className="profile-section">
// //         <h2>Abhishek</h2>
// //         <h4>Java Developer | 3+ Years Experience</h4>
// //         <p>Bangalore, India</p>
// //         <div className="profile-buttons">
// //           <button className="btn" onClick={handleContactClick}>Contact Me</button>
// //           <a href={resumePdf} className="btn" download>Download Resume</a>
// //         </div>

// //         {showContact && (
// //           <div className="contact-details">
// //             <p><strong>Name:</strong> Abhishek</p>
// //             <p><strong>Mobile:</strong> 7975829123</p>
// //             <p><strong>Email:</strong> abhishekabhi61995@gmail.com</p>
// //           </div>
// //         )}
// //       </div>

// //       <div className="dashboard-stats">
// //         <div className="stat-box">
// //           <img src={projectGif} alt="Projects" className="stat-gif" />
// //           <h2>10+</h2>
// //           <p>Projects Completed</p>
// //         </div>
// //         <div className="stat-box">
// //           <img src={experienceGif} alt="Experience" className="stat-gif" />
// //           <h2>3+</h2>
// //           <p>Years of Experience</p>
// //         </div>
// //         <div className="stat-box">
// //           <img src={techGif} alt="Technologies" className="stat-gif" />
// //           <h2>20+</h2>
// //           <p>Technologies Used</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;
// import React, { useState } from 'react';
// import './Dashboard.css';
// import profileImg from '../assets/profile.png';
// import resumePdf from '../assets/resume.pdf';
// import projectGif from '../assets/projects.gif';
// import experienceGif from '../assets/experience.gif';
// import techGif from '../assets/tech.gif';

// const Dashboard = () => {
//   const [showContact, setShowContact] = useState(false);

//   const handleContactClick = () => {
//     setShowContact(!showContact);
//   };

//   return (
//     <div className="dashboard-container">
//       {/* Profile Section */}
//       <div className="dashboard-profile">
//         <img src={profileImg} alt="Profile" className="dashboard-profile-img" />
//       </div>

//       <div className="profile-section">
//         <h2>Abhishek</h2>
//         <h4>Java Developer | 3+ Years Experience</h4>
//         <p>Bangalore, India</p>
//         <div className="profile-buttons">
//           <button className="btn" onClick={handleContactClick}>Contact Me</button>
//           <a href={resumePdf} className="btn" download>Download Resume</a>
//         </div>

//         {showContact && (
//           <div className="contact-details">
//             <p><strong>Name:</strong> Abhishek</p>
//             <p><strong>Mobile:</strong> 7975829123</p>
//             <p><strong>Email:</strong> abhishekabhi61995@gmail.com</p>
//           </div>
//         )}
//       </div>

//       {/* Stats Section */}
//       <div className="dashboard-stats">
//         <div className="stat-box">
//           <img src={projectGif} alt="Projects" className="stat-gif" />
//           <h2>10+</h2>
//           <p>Projects Completed</p>
//         </div>
//         <div className="stat-box">
//           <img src={experienceGif} alt="Experience" className="stat-gif" />
//           <h2>3+</h2>
//           <p>Years of Experience</p>
//         </div>
//         <div className="stat-box">
//           <img src={techGif} alt="Technologies" className="stat-gif" />
//           <h2>20+</h2>
//           <p>Technologies Used</p>
//         </div>
//       </div>

//       {/* All Panels */}
//       <div className="panel-box">
//         <h2>About Me</h2>
//         <p>
//           I'm a passionate software developer with 3+ years of experience in Java development.
//           Skilled in Java Swing, Spring Boot, MySQL, and React. Adept at debugging, REST APIs, and Linux.
//         </p>
//       </div>

//       <div className="panel-box">
//         <h2>Skills</h2>
//         <h4>Core Competencies</h4>
//         <ul>
//           <li>Software Development</li>
//           <li>Programming</li>
//           <li>Debugging</li>
//           <li>Build and Deployment</li>
//           <li>Linux</li>
//           <li>Performance Optimization</li>
//         </ul>
//         <h4>Technical Skills</h4>
//         <ul>
//           <li>Java, Spring Boot, MySQL, HTML, CSS, React.js</li>
//           <li>Redis, WSL, Git & GitHub, Java Swings</li>
//         </ul>
//         <h4>Soft Skills</h4>
//         <ul>
//           <li>Communication, Reliable, Flexible, Adaptability</li>
//           <li>Analytical, Collaborative Team Work</li>
//         </ul>
//       </div>

//       <div className="panel-box">
//         <h2>Projects</h2>
//         <ul>
//           <li><strong>Municipal Corporation System</strong><br />
//             JSP Web App | Tools: Eclipse, XAMPP<br />
//             Manages municipal records and services online.
//           </li>
//           <li><strong>College Management System</strong><br />
//             PHP Web App | Tools: VS Code, XAMPP<br />
//             Administers student, course, and staff info efficiently.
//           </li>
//           <li><strong>Pollution Control Services</strong><br />
//             JSP Web App | Tools: Eclipse, WAMP<br />
//             Tracks environmental data and control measures.
//           </li>
//           <li><strong>Locker Application</strong><br />
//             Java Swing Desktop App | Tools: NetBeans, MySQL<br />
//             Used in malls, railways for locker booking and retrieval.
//           </li>
//         </ul>
//       </div>

//       <div className="panel-box">
//         <h2>Education</h2>
//         <p>
//           Master of Computer Applications, JNNCE<br />
//           Visvesvaraya Technological University, Bangalore, 2020
//         </p>
//       </div>

//       <div className="panel-box">
//         <h2>Contact Info</h2>
//         <p><strong>Email:</strong> abhishekabhi61995@gmail.com</p>
//         <p><strong>Phone:</strong> +91-7975829123</p>
//         <p><strong>Address:</strong> No:144, 4th Main, 8th Block, Nandini Layout, Bengaluru 560009</p>
//         <p><strong>Date of Birth:</strong> 13th Nov 1995</p>
//         <p><strong>Languages:</strong> English, Kannada, Telugu</p>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
// src/components/Dashboard.js
import React, { useState } from 'react';
import './Dashboard.css';
import profileImg from '../assets/profile.png';
import resumePdf from '../assets/resume.pdf';
import projectGif from '../assets/projects.gif';
import experienceGif from '../assets/experience.gif';
import techGif from '../assets/tech.gif';

const Dashboard = () => {
  const [showContact, setShowContact] = useState(false);

  const handleContactClick = () => {
    setShowContact(!showContact);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-profile">
        <img src={profileImg} alt="Profile" className="dashboard-profile-img" />
      </div>

      <div className="profile-section">
        <h2>Abhishek</h2>
        <h4>Java Developer | 3+ Years Experience</h4>
        <p>Bangalore, India</p>
        <div className="profile-buttons">
          <button className="btn" onClick={handleContactClick}>Contact Me</button>
          <a href={resumePdf} className="btn" download>Download Resume</a>
        </div>

        {showContact && (
          <div className="contact-details">
            <p><strong>Name:</strong> Abhishek</p>
            <p><strong>Mobile:</strong> 7975829123</p>
            <p><strong>Email:</strong> abhishekabhi61995@gmail.com</p>
          </div>
        )}
      </div>

      <div className="dashboard-stats">
        <div className="stat-box">
          <img src={projectGif} alt="Projects" className="stat-gif" />
          <h2>10+</h2>
          <p>Projects Completed</p>
        </div>
        <div className="stat-box">
          <img src={experienceGif} alt="Experience" className="stat-gif" />
          <h2>3+</h2>
          <p>Years of Experience</p>
        </div>
        <div className="stat-box">
          <img src={techGif} alt="Technologies" className="stat-gif" />
          <h2>20+</h2>
          <p>Technologies Used</p>
        </div>
      </div>

      {/* Additional Sections */}

      <div className="panel-box">
        <h2>About Me</h2>
        <p>
          Passionate software developer eager to tackle challenging roles, leveraging advanced skills in Java, Spring Boot,
          MySQL, and React.js with strong Linux knowledge.
        </p>
        <ul>
          <li>2.9+ years of experience in Java Swings, Spring Boot, MySQL, React.</li>
          <li>Strong understanding of Java 8 features: Streams, Functional Interfaces.</li>
          <li>Debugging, REST APIs, Redis Cache, WSL, and Linux-based optimization.</li>
        </ul>
      </div>

      <div className="panel-box">
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Municipal Corporation System:</strong> JSP-based web application for admin tasks. Tools: Eclipse, XAMPP.
          </li>
          <li>
            <strong>College Management System:</strong> PHP web app for managing student/admin activities. Tools: XAMPP, VS Code.
          </li>
          <li>
            <strong>Pollution Control Services:</strong> JSP web app. Tools: WAMP Server, Eclipse.
          </li>
          <li>
            <strong>Locker Application:</strong> Swing desktop app for mall locker service. Tools: NetBeans, MySQL Workbench.
          </li>
        </ul>
      </div>

      <div className="panel-box">
        <h2>Education</h2>
        <p>
          <strong>Master of Computer Applications</strong><br />
          Jawaharlal Nehru National College of Engineering,<br />
          VTU, Bangalore – 2020.
        </p>
      </div>

      <div className="panel-box">
        <h2>Skills</h2>
        <ul>
          <li>Java, Spring Boot, MySQL, JDBC, Hibernate</li>
          <li>React.js, HTML, CSS</li>
          <li>Linux, Git, GitHub, REST API, Debugging</li>
          <li>Tools: Eclipse, NetBeans, MySQL Workbench, Postman</li>
        </ul>
      </div>

      <div className="panel-box">
        <h2>Contact</h2>
        <p><strong>Email:</strong> abhishekabhi61995@gmail.com</p>
        <p><strong>Phone:</strong> +91-7975829123</p>
        <p><strong>Address:</strong> No:144, 4th Main, 8th Block, Nandini Layout, Bengaluru, 560096</p>
        <p><strong>Languages:</strong> English, Kannada, Telugu</p>
      </div>
    </div>
  );
};

export default Dashboard;
