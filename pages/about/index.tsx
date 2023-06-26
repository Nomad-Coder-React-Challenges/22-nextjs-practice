import { AboutTemplate } from '#components/templates';
import { META_TAG } from 'metatag';

const AboutPage = () => {
  return <AboutTemplate />;
};

export default AboutPage;

export async function getStaticProps() {
  return {
    props: {
      title: META_TAG['about']['title'],
      description: META_TAG['about']['description'],
    },
  };
}
