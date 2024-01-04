/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './skills.css';
import { resume } from '../../utility/resumeBuilder';

const Skills = ({ reference }) => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // In your case there's only one element to observe:
      if (entries[0].isIntersecting) {
        // Not possible to set it back to false like this:
        setVisible(true);

        // No need to keep observing:
        observer.unobserve(reference.current);
      }
    });

    observer.observe(reference.current);

    return () => observer.disconnect();
  }, []);
  return (
    <section ref={reference} className={isVisible ? ' is-visible' : ''}>
      <div className='p-6 mt-10'>
        <div className='container mx-auto flex flex-col text-center relative 2xl:mb-10'>
          <h1 className='mirror right-0'>My Skills</h1>
          <h1 className='header text-5xl pt-4 mb-6'>My Skills</h1>
        </div>
        <div className='flex-item-2 flex-col md:flex-row items-center mt-6'>
          {resume.skills.primary.map((skill, index, skills) => (
            <div
              class={`w-10/12 md:w-full mb-8 px-4 ${
                resume.skills.primary.length % 2 !== 0 &&
                index === skills.length - 1
                  ? '!flex-grow-0'
                  : ''
              }`}
            >
              <h3>{skill.name}</h3>
              <div class='progress'>
                <div class='progress-bar' style={{ width: `${skill.score}%` }}>
                  <span>{skill.score}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
