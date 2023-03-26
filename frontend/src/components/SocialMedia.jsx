import React from 'react';
import { BsTwitter ,BsInstagram } from 'react-icons/bs';
import { FaLinkedin  } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a  href="http://siddhant-singh.great-site.net/" target="_blank"> <BsTwitter /></a>
    </div>
    <div>
      <a  href="https://www.linkedin.com/in/siddhant-singh-a0b020193" target="_blank"> <FaLinkedin  /></a>
    </div>
    <div>
      
      <a  href="https://www.instagram.com/sid_uk07/" target="_blank"> <BsInstagram />  </a>
    </div>
  </div>
);

export default SocialMedia;
