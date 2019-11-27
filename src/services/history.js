import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const path = (/#!(\/.*)$/.exec(window.location.hash) || [])[1];
if (path) {
    history.replace(path);
}

export default history;