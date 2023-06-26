import styles from './about.styled';

import * as Atoms from '#components/atoms';

const AboutTemplate = () => {
  return (
    <div css={styles.container}>
      <Atoms.H1 weight='700' lineHeight='130%' css={styles.title}>
        About Us
      </Atoms.H1>
      <Atoms.Paragraph css={styles.content}>
        Welcome to the official explorer for The New York Times Best Seller list
        explorer.
      </Atoms.Paragraph>
      <Atoms.Paragraph css={styles.content}>
        We hope you enjoy your stay!
      </Atoms.Paragraph>
    </div>
  );
};

export default AboutTemplate;
