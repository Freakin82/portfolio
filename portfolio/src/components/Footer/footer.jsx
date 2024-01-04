import React from 'react';
import './footer.css';
import { resume } from '../../utility/resumeBuilder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='p-6 mt-20 flex flex-col gap-10'>
      <div className='container mx-auto flex justify-center gap-10 relative 2xl:mb-10'>
        <a href={resume.links.linkedIn} target='_blank' rel='noreferrer'>
          <button className='btn footer-button'>
            <FontAwesomeIcon icon={faLinkedinIn} fontSize={25} />
          </button>
        </a>
        <a href={resume.links.github} target='_blank' rel='noreferrer'>
          <button className='btn footer-button'>
            <FontAwesomeIcon icon={faGithub} fontSize={25} />
          </button>
        </a>
        <a href={resume.links.instagram} target='_blank' rel='noreferrer'>
          <button className='btn footer-button'>
            <FontAwesomeIcon icon={faInstagram} fontSize={25} />
          </button>
        </a>
      </div>
      <div className='text-center'>
        | Copyright ©{new Date().getFullYear()} {resume.name} All rights
        reserved |
      </div>
    </div>
  );
};

export default Footer;
