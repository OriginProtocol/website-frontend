import Analytics from "analytics";
import googleAnalytics from "@analytics/google-analytics";
import { isDevelopment } from "utils/constants";

const plugins = [];
if (process.env.NEXT_PUBLIC_GA_ID) {
  plugins.push(
    googleAnalytics({
      measurementIds: [process.env.NEXT_PUBLIC_GA_ID],
    })
  );
}

const analytics = Analytics({
  app: "origin-protocol-website",
  version: 1,
  plugins: plugins,
  debug: isDevelopment,
});

export default analytics;
