import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

function init() {
    Sentry.init({
        dsn: "https://2c5c2babc1a843c1bc77d2a600ab1adf@o1179436.ingest.sentry.io/6291718",
        integrations: [new BrowserTracing()],
        tracesSampleRate: 1.0,
      });
}

function log(error) {
    Sentry.captureException(error)
    // console.log(error)
}

const exportedObj = {
    init,
    log
};

export default exportedObj;