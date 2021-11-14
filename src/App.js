import { Fragment, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

const NewQuotes = lazy(() => import('./pages/NewQuotes'));
const QuoteDetail = lazy(() => import('./pages/QuoteDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));
const AllQuotes = lazy(() => import('./pages/AllQuotes'));

const App = () => {
  return (
    <Fragment>
      <Layout>
        <Suspense
          fallback={
            <div className="centered">
              <LoadingSpinner />
            </div>
          }
        >
          <Switch>
            <Route exact path="/">
              <Redirect to="/quotes" />
            </Route>
            <Route exact path="/quotes" component={AllQuotes} />
            <Route path="/quotes/:quoteId" component={QuoteDetail} />
            <Route path="/new-quote" component={NewQuotes} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </Layout>
    </Fragment>
  );
};

export default App;
