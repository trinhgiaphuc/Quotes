import { useEffect } from 'react';

import QuoteList from '../components/quotes/QuoteList';
import NoQuotesFond from '../components/quotes/NoQuotesFound';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';

import LoadingSpinner from '../components/UI/LoadingSpinner';

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: quotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) return <p className="centered focused">{error}</p>;

  if (status === 'completed' && quotes.length === 0) return <NoQuotesFond />;

  return <QuoteList quotes={quotes} />;
};

export default AllQuotes;
