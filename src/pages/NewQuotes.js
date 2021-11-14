import { useEffect } from 'react';
import { useHistory } from 'react-router';

import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

const NewQuotes = () => {
  const { sendRequest, status } = useHttp(addQuote);

  const history = useHistory();

  useEffect(() => {
    if (status === 'completed') {
      history.push('/quotes');
    }
  }, [history, status]);

  function addQuoteHanndler(data) {
    console.log(data);
    sendRequest(data);
  }

  return (
    <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHanndler} />
  );
};

export default NewQuotes;
