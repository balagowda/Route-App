import React from "react";
import NavBar from "../NavBar/NavBar";

const About = () => {
  return (
    <div className="about-body">
      <NavBar />
      <div className="about-page">
        <h2>About Us</h2>

        <p className="about-paragraph">
          <strong className="strong">Unveil the World with MyRouter! </strong>
          <br />
          At MyRouter, we've embarked on a journey to redefine the way you
          explore and navigate the world. Whether you're an intrepid
          globetrotter, a daily commuter, or an outdoor enthusiast seeking the
          perfect trail, we're here to elevate your experiences using the
          unparalleled capabilities of Google Cloud APIs.
        </p>
        <br />
        <h4>Our Mission</h4>
        <p className="about-paragraph">
          Our mission is simple yet profound: to empower travelers and explorers
          with cutting-edge technology that simplifies route planning and
          transforms travel into an adventure. We're committed to making your
          journeys smoother, smarter, and more enjoyable.
        </p>
        <br />
        <h5>What Makes Us Exceptional</h5>
        <p className="about-paragraph">
          <ul>
            <li>
              <strong>Harnessing Google Cloud's Power: </strong>We've harnessed
              the formidable capabilities of Google Cloud APIs to provide you
              with real-time, dynamic mapping and routing solutions. Stay ahead
              of the curve with the latest data at your fingertips.
            </li>
            <li>
              <strong>Tailored for You: </strong>Recognizing that every journey
              is a unique story waiting to be told, our platform empowers you to
              customize your routes according to your preferences. Avoid
              traffic, discover hidden gems, and plan multi-stop odysseys with
              ease.
            </li>
            <li>
              <strong>Elegantly User-Centric: </strong>Our website is designed
              with an unwavering focus on you. We believe that technology should
              be intuitive and accessible, ensuring that users of all
              backgrounds can effortlessly chart their course.
            </li>
            <li>
              <strong>A Thriving Community: </strong>Join forces with fellow
              travelers, share your favorite routes, and unlock new horizons
              through our vibrant community. We understand that the best
              adventures are often those shared with others.
            </li>
            <li>
              <strong>User-Focused Design: </strong>Our website is designed with
              you in mind. We prioritize simplicity and intuitiveness, ensuring
              that users of all levels can easily plan their routes and get on
              their way.
            </li>
            <li>
              <strong>Community and Social Features: </strong>Connect with other travelers, share
              your favorite routes, and discover new ones through our vibrant
              community. We believe that the best routes are often discovered
              through shared experiences.
            </li>
          </ul>
        </p>
      </div>
      <div className="circle"></div>
    </div>
  );
};

export default About;
