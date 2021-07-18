import React, { useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const About = () => {
  const revealContainer = useRef(null);

  const skills = ['JavaScript (ES6+)', 'React', 'Firebase', 'Node.js', 'Python'];

  return (
    <section id="about" ref={revealContainer} className="m-4 bg-white p-3">
      <h2 className="section-title">About Me</h2>

      <div className="m-auto w-auto max-w-4xl grid flex-column mt-4 sm:grid md:grid lg:flex">
        <div className="mr-4 min-w-l relative max-w-xl p-1 mt-2 text-lg leading-relaxed text-blueGray-500 flex-1">
          <p className="p-1 w-auto">
            My name is Spencer and building things for the web is my passion.
            In my late teens, my curiosity drove me to better understand how sites and products were created.
            I was inspired to learn about the basics of Web Development in my free time.
          </p>

          <p className="p-1 w-auto">
            At each milestone of my coding journey, there was always more to learn.
            I love surrounding myself with progress and innovation.
            There is opportunity to question what already exists, create a better solution, or even build new solutions from scratch.
          </p>
        </div>

        <div>
          <div className="wrapper flex items-center justify-center w-max h-full m-auto">
            <StaticImage
              className="w-60 align-middle m-auto"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </div>
      </div>

      <ul className="max-w-2xl grid md:flex md:flex-row my-6 m-auto">
        <li className="uppercase m-auto text-navy-medium font-semibold">Skills:</li>
        {skills && skills.map((skill, i) => (
          <li className="w-50 px-2 mx-2"
            key={i}>
            {skill}
          </li>
        ))}
      </ul>
    </section >
  );
};

export default About;
