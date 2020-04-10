import React from 'react';
import FooterLogo from '../icons/footer-logo.png';
import Grid from '@material-ui/core/Grid';
import styles from '../styles/footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <Grid container>

        <Grid item xs={12} md={6} className={styles.footerLogoContainer}>
          <a href="http://thesupply.com"><img src={FooterLogo} alt="supply footer logo" /></a>
        </Grid>
        <Grid item xs={12} md={3} className={styles.footerOneThird}>
          <h4 className={styles.titleLines}>Follow Us</h4>
          <ul className={styles.social}>
            <li>
              <a href="https://www.facebook.com/TheSupply.Online" target="_blank" rel="noopener">facebook</a>
            </li>
            <li>
              <a href="https://twitter.com/thesupply_feed" target="_blank" rel="noopener">twitter</a>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} md={3}>
          <h4 className={styles.titleLines}>Lets Talk</h4>
          <ul className={styles.social}>
            <li>
              <a href="mailto:info@thesupply.com?Subject=Hello%20from%20The%20Supply%20Salaries">email</a>
            </li>
            <li>
              <a href="callto://+17202328185">720.232.8185</a>
            </li>
          </ul>
        </Grid>

      </Grid>
    </footer>
  );
};

export default Footer;
