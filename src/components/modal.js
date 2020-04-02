import React from 'react';
import styles from '../styles/modal.module.scss';

const Modal = ({ show }) => {
  return (
    <div>
    {show &&
      <div className={styles.modalPanel}>Hey This is just a quick little one-page site that houses all the cool sites/apps/platforms who have taken the time to curate cool shit within certain categories. The internet is a mess, it needs some curation...Send over a note if you have some good links to add shaz@thesupply.com </div>
    }
    </div>
  );
};

export default Modal;
