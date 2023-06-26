import { useTheme } from '@emotion/react';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';

import styles from './Header.styled';

import * as Atoms from '#components/atoms';
import DarkModeToggle from '#components/blocks/DarkModeToggle';
import { ScreenSizeState } from '#stores/appStateStore';

const Header = () => {
  const theme = useTheme();

  const { isMobile } = useRecoilValue(ScreenSizeState);
  return (
    <header css={styles.header({ theme })}>
      <div css={styles.headerBox}>
        <section css={styles.menuBox}>
          <Link href={'/'}>
            <Atoms.Button
              text='Home'
              color='text'
              size={isMobile ? 'sm' : 'lg'}
            />
          </Link>
          <Link href={'/about'}>
            <Atoms.Button
              text='About'
              color='text'
              size={isMobile ? 'sm' : 'lg'}
            />
          </Link>
        </section>
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;
