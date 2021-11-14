import { Fragment, useEffect } from 'react';
import { Route, useParams, useRouteMatch } from 'react-router';

import HighLightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';
import { Link } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const QuoteDetail = () => {
  const { quoteId } = useParams();
  const { path } = useRouteMatch();

  const {
    sendRequest,
    status,
    error,
    data: quote,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) return <p className="centered focused">{error}</p>;

  if (!quote.text) return <NoQuotesFound />;

  return (
    <Fragment>
      <HighLightedQuote text={quote.text} author={quote.author} />
      <Route exact path={path}>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${path}/comments`} component={Comments}></Route>
    </Fragment>
  );
};

export default QuoteDetail;
