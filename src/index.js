import { Suspense, lazy, StrictMode } from 'react';
import ReactDOM from 'react-dom';
import Spinner from './components/Spinner';
import * as serviceWorker from './serviceWorker';
import './index.css';

const App = lazy(() => import('./components/App'));

ReactDOM.render(
  <StrictMode>
    <Suspense fallback={<Spinner />}>
      <App />
    </Suspense>
  </StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
