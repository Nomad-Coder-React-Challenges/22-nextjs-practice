import styles from './id.styled';

import * as Atoms from '#components/atoms';
import Thumbnail from '#components/blocks/Thumbnail';
import { useBookList } from '#hooks/queries/booksQuery';

const BookListTemplate = () => {
  const { data } = useBookList();
  const categoryName = data?.results?.display_name;
  const bookList = data?.results?.books;

  return (
    <div css={styles.container}>
      <Atoms.H1 weight='700' lineHeight='130%' css={styles.title}>
        {categoryName} List
      </Atoms.H1>
      <section css={styles.listContainer}>
        {bookList?.map((books) => (
          <Thumbnail key={`${books?.title}-${books?.rank}`} info={books} />
        ))}
      </section>
    </div>
  );
};

export default BookListTemplate;
