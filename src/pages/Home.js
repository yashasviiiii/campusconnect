import React from "react";
import "./Home.css";

function Home() {
  const features = [
    { title: "Discussion Forums", emoji: "💬", desc: "Ask doubts and help others" },
    { title: "Buy/Sell Zone", emoji: "🛍️", desc: "List or purchase second-hand items" },
    { title: "Real-Time Chat", emoji: "⚡", desc: "Connect instantly with campus mates" },
    { title: "Event Board", emoji: "🎉", desc: "Post and explore campus events" },
  ];

  return (
    <div className="home-container">
      {/* Hero */}
      <div className="home-hero">
        <h1>CampusConnect</h1>
        <p>One platform for all your campus needs — from doubts to events, we’ve got you covered.</p>
      </div>

      {/* Features */}
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.emoji}</div>
            <div className="feature-title">{feature.title}</div>
            <div className="feature-desc">{feature.desc}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="cta-button">
        <button onClick={() => alert("Login functionality coming soon")}>Get Started</button>
      </div>
    </div>
  );
}

export default Home;
