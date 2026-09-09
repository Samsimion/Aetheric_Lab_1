import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Briefcase, 
  Code2, 
  User, 
  Award,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Download
} from 'lucide-react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';

export default function About() {
  const experiences = [
    {
      title: "IT Consultant & Technician",
      company: "Meru University of Science and Technology",
      period: "May 2022 - Aug 2023",
      description: [
        "Assisted in implementation and maintenance of IT infrastructure",
        "Collaborated with colleagues to troubleshoot and resolve technical issues",
        "Conducted IT audits to identify areas for improvement",
        "Provided technical support and training to staff and students"
      ]
    },
    {
      title: "Cyber Café Manager",
      company: "Marinata Cyber Cafe",
      period: "Jun 2020 - Jul 2024",
      description: [
        "Provided computer training to learners, enhancing their technical skills",
        "Managed daily operations and customer service",
        "Implemented and maintained computer systems and networks",
        "Developed and executed promotional strategies"
      ]
    },
    {
      title: "Data Entry Specialist",
      company: "BrandEye",
      period: "Oct 2022 - Mar 2023",
      description: [
        "Conducted sentiment analysis on social media data",
        "Provided accurate data entry services",
        "Analyzed large datasets to extract meaningful insights",
        "Worked with a remote team to deliver projects on time"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor's Degree in Information Technology",
      institution: "Meru University of Science and Technology",
      period: "May 2019 - Oct 2023",
      achievement: "Second Class Honors"
    },
    {
      degree: "Kenya Certificate of Secondary Education",
      institution: "Shimo La Tewa Secondary School",
      period: "Feb 2015 - Nov 2018",
      achievement: "Mean Grade: C+"
    }
  ];

  const skills = {
    programming: ["Java", "C++", "Python", "JavaScript"],
    frontend: ["HTML", "CSS", "JavaScript", "Angular", "TypeScript"],
    backend: ["Node.js", "Flask", "Django"],
    database: ["MongoDB", "SQL"],
    cloud: ["AWS", "Azure", "Google Cloud Platform"],
    devops: ["Docker", "Kubernetes", "CI/CD"],
    data: ["Pandas", "NumPy", "Matplotlib"],
    ml: ["TensorFlow", "scikit-learn"]
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <span className="inline-block bg-blue-500/10 text-blue-400 rounded-full px-4 py-1 text-sm font-medium mb-4">
                About Me
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Turning Ideas Into
                <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Digital Reality
                </span>
              </h1>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm Samuel Vundi Simion, a dedicated Information Technology graduate with a solid foundation 
                in software, mobile, and web development. Proven experience through hands-on projects, 
                including a final year AI-based Android application and various website development tasks for clients.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Adept at working with social media platforms and modern web technologies. Currently seeking 
                to leverage my technical skills and practical knowledge in a dynamic digital department.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button variant="primary" size="lg">
                    Let's Connect
                  </Button>
                </Link>
                <Button variant="secondary" size="lg" icon={<Download className="w-5 h-5" />}>
                  Download CV
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20"></div>
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center">
                        <User className="w-8 h-8 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Samuel Vundi Simion</h3>
                        <p className="text-gray-400 text-sm">Full-Stack Developer</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-gray-300">
                        <MapPin className="w-5 h-5 text-blue-400" />
                        <span>Nairobi, Kenya</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <Mail className="w-5 h-5 text-blue-400" />
                        <span>Samuelsimion1999@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <Phone className="w-5 h-5 text-blue-400" />
                        <span>+254748947719</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <Calendar className="w-5 h-5 text-blue-400" />
                        <span>Available for Freelance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Work Experience"
            subtitle="Professional Journey"
            description="My experience spans across various roles in the tech industry, from IT consulting to freelance development."
          />
          <div className="mt-12 space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-blue-400">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm whitespace-nowrap bg-gray-700/50 px-4 py-2 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2">
                      <span className="text-blue-400 mt-1">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Education"
            subtitle="Academic Background"
            description="My educational journey that built the foundation for my technical expertise."
          />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                <p className="text-blue-400">{edu.institution}</p>
                <p className="text-gray-400 text-sm mt-2">{edu.period}</p>
                <p className="text-gray-300 mt-3">{edu.achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Skills & Expertise"
            subtitle="Technical Proficiency"
            description="A comprehensive overview of my technical skills across various domains."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300">
                <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want to Work Together?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              I'm always open to new opportunities and collaborations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Let's Talk
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="secondary" size="lg">
                  View My Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}