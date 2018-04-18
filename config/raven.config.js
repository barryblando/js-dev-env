import Raven from 'raven-js';

/* Goto to sentry.io > Project_Name > Settings > Client Keys (DSN) */
const sentry_key = '29fdcccc13fc41a8a78b53ac8f4e4c8b'; // Your Sentry key
const sentry_app = '267363'; // Your Sentry App ID

export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });

  window && window.console && console.error && console.error(ex); // eslint-disable-line no-console
}
