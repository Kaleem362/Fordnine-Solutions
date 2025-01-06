import React, { useEffect, useRef, useState } from "react";
import "../ProductPage/ProductPage.css";
import {
  Smartphone,
  Star,
  Download,
  Award,
  ArrowRight,
  Heart,
  Zap,
  Shield,
  ArrowDownRightFromSquare,
} from "lucide-react";
import "./ProductPage.css";

const ProductPage = () => {
  const screenshotRef = useRef(null);
  const [screenshots, setScreenshots] = useState([]);

  useEffect(() => {
    const importScreenshots = async () => {
      const images = import.meta.glob("/public/ProductImages/*.png", {
        eager: true,
      });
      const imageUrls = Object.values(images).map((img) => img.default || img);
      setScreenshots(imageUrls);
    };

    importScreenshots();
  }, []);

  const features = [
    {
      icon: <Star size={24} />,
      title: "Intuitive Interface",
      description:
        "Seamlessly designed user experience that feels natural and responsive",
    },
    {
      icon: <Shield size={24} />,
      title: "Secure & Private",
      description:
        "Your data is protected with industry-leading encryption standards",
    },
    {
      icon: <Zap size={24} />,
      title: "Lightning Fast",
      description:
        "Optimized performance for instant response and smooth animations",
    },
    {
      icon: <Heart size={24} />,
      title: "User-Focused",
      description:
        "Built with love and attention to detail for the best user experience",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".feature-card, .screenshot");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="product-container">
      <div className="floating-icon icon-1">
        <Smartphone size={28} />
      </div>
      <div className="floating-icon icon-2">
        <Star size={28} />
      </div>
      <div className="floating-icon icon-3">
        <Download size={28} />
      </div>
      <div className="floating-icon icon-4">
        <Award size={28} />
      </div>
      <div className="floating-icon icon-4">
        <ArrowDownRightFromSquare size={28} />
      </div>

      <div className="header-section">
        <h1 className="title">Revolutionary Development Experience</h1>
        <p className="subtitle">
          Transform your daily routine with our cutting-edge mobile application.
          Designed to enhance productivity and bring joy to your digital life.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="screenshots-container" ref={screenshotRef}>
        <h2
          className="title"
          style={{ fontSize: "2.5rem", marginLeft: "10px" }}
        >
          Featured Products
        </h2>
        <div className="screenshot-wrapper">
          {screenshots.map((url, index) => (
            <div key={index}>
              <img
                src={url}
                alt={`App Screenshot ${index + 1}`}
                className="screenshot"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="marquee-container">
          <div className="marquee-content">
            {screenshots.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`App Screenshot ${index + 1}`}
                className="screenshot"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "4rem" }}>
        <a
          href="https://play.google.com/store/search?q=fordnine&c=apps&hl=en"
          style={{ textDecoration: "none" }}
        >
          <p className="cta-button">
            Download Now{" "}
            <ArrowRight
              size={20}
              style={{ marginLeft: "8px", display: "inline" }}
            />
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProductPage;
