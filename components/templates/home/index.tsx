import { useTheme } from '@emotion/react';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';

import styles from './home.styled';

import * as Atoms from '#components/atoms';
import { IconArrow } from '#components/atoms/svgs';
import { useCategoryList } from '#hooks/queries/booksQuery';
import { ScreenSizeState } from '#stores/appStateStore';

const HomeTemplate = () => {
  const theme = useTheme();
  const { isMobile } = useRecoilValue(ScreenSizeState);

  const { data } = useCategoryList();
  const categoryList = data?.results;

  return (
    <div css={styles.container}>
      <Atoms.H1 weight='700' lineHeight='130%' css={styles.title}>
        The New York Times Best Seller Explorer
      </Atoms.H1>
      <section css={styles.listContainer}>
        {categoryList?.map((items) => (
          <Link
            key={items.list_name_encoded}
            href={`/list/${items.list_name_encoded}`}
          >
            <Atoms.Button
              text={items.display_name}
              size={isMobile ? 'sm' : 'lg'}
              rightIcon={
                <IconArrow
                  width={12}
                  height={12}
                  stroke={theme.colors.mono.black}
                />
              }
            />
          </Link>
        ))}
      </section>
    </div>
  );
};

export default HomeTemplate;
