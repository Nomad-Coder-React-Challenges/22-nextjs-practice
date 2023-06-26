import { css } from '@emotion/react';

import { DESKTOP_SCREEN_SIZE, MOBILE_SCREEN_SIZE } from '#constants';
import { mq } from '#styles/mediaQuery';

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: ${DESKTOP_SCREEN_SIZE}px;
  user-select: none;
  padding: 16px;
  gap: 16px;

  ${mq('desktop')} {
    align-items: flex-start;
    padding: 24px;
    gap: 24px;
  }
`;

const title = css`
  margin: 24px 0;
`;

const listContainer = css`
  display: grid;
  gap: 16px;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 538px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${MOBILE_SCREEN_SIZE}px) {
    grid-template-columns: repeat(4, 1fr);
  }
  ${mq('desktop')} {
    justify-content: start;
  }
`;

const styles = {
  container,
  title,
  listContainer,
};

export default styles;
