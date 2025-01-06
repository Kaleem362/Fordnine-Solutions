import "../../../Styles/ServicesPage.css";
import figmaIcon from "../../../pngicons/figmaIcon.png";
import canvaicon from "../../../pngicons/canvaicon.png";
import wordpressicon from "../../../pngicons/wordpressicon.png";
import freelancingicon from "../../../pngicons/freelancingicon.png";
import mobileappicon from "../../../pngicons/mobileappicon.png";
import seoicon from "../../../pngicons/seoicon.png";
import webapplicationicon from "../../../pngicons/webapplicationicon.png";
import promptengineeringicon from "../../../pngicons/promptengineeringicon.png";

function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "We offer professional web development services tailored to your business needs.",
      icon: webapplicationicon,
    },
    {
      title: "Mobile App Development",
      description:
        "Develop feature-rich mobile apps for both Android and iOS platforms.",
      icon: mobileappicon,
    },
    {
      title: "SEO Optimization",
      description:
        "Improve your website's visibility with our effective SEO strategies.",
      icon: seoicon,
    },
    {
      title: "Figma Design",
      description:
        "Create visually stunning graphics to enhance your brand identity.",
      icon: figmaIcon,
    },
    {
      title: "Canva Design",
      description:
        "Design eye-catching visuals to elevate your brand presence.",
      icon: canvaicon,
    },
    {
      title: "WordPress Development",
      description:
        "Build responsive and customizable websites using WordPress to meet your business needs.",
      icon: wordpressicon,
    },
    {
      title: "Freelancing",
      description:
        "Leverage your skills and work independently on a variety of projects to grow your career.",
      icon: freelancingicon,
    },
    {
      title: "Prompt Engineering",
      description:
        "Master prompt engineering to craft effective prompts and optimize AI performance.",
      icon: promptengineeringicon,
    },
  ];

  return (
    <div className="servicesPage-container">
      <section className="fordnine-intro">
        <h1>Welcome to Fordnine</h1>
        <p>
          At Fordnine, we specialize in delivering innovative digital solutions
          that help businesses grow and succeed in the modern world. Our team of
          experts provides top-notch services ranging from web and mobile app
          development to graphic design, SEO optimization, and more. With years
          of experience and a passion for technology, we empower businesses to
          achieve their full potential. Explore our wide range of services
          designed to help your business thrive.
        </p>
      </section>

      <h2 className="text-center">Our Services</h2>
      <p className="text-center description">
        We provide innovative solutions to meet your business needs.
      </p>

      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">
              <img src={service.icon} />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="Contact-btn-div">
        <button className="button">
          <a
            href="ContactPage/#ContactPageNavigation"
            className="text-decoration-none text-black fw-bold"
          >
            Contact us
          </a>
        </button>
      </div>
    </div>
  );
}

export default Services;
