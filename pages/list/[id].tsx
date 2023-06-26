import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetServerSidePropsContext } from 'next';

import { getBookListAPI } from '#apis/books';
import { BookListTemplate } from '#components/templates';
import { QUERY_KEYS } from '#constants';
import { BookResultModel, CategoryListModel } from '#types/models';

const BookListPage = () => {
  return <BookListTemplate />;
};

export default BookListPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const queryClient = new QueryClient();
  const categoryName = context.query?.id as string;
  await Promise.all([
    queryClient.prefetchQuery([QUERY_KEYS.BOOK_LIST, categoryName], () =>
      getBookListAPI({ categoryName }),
    ),
  ]);

  const bookData = queryClient.getQueryData([
    QUERY_KEYS.BOOK_LIST,
    categoryName,
  ]) as CategoryListModel<BookResultModel>;

  return {
    notFound: bookData === undefined,
    props: {
      dehydratedState: dehydrate(queryClient),
      title: bookData?.results?.display_name,
      description: `Lists of ${categoryName}`,
    },
  };
}
