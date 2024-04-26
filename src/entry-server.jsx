import { createHandler, StartServer } from "@solidjs/start/server";
 
export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="https://avatars.githubusercontent.com/u/123065261?v=4" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.2.0/css/fork-awesome.min.css" integrity="sha256-XoaMnoYC5TH6/+ihMEnospgm0J1PM/nioxbOUdnM8HY=" crossorigin="anonymous"></link>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.20.7/dist/css/uikit.min.css" />
          <script src="https://cdn.jsdelivr.net/npm/uikit@3.20.7/dist/js/uikit.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/uikit@3.20.7/dist/js/uikit-icons.min.js"></script>
          {assets}
        </head>
        <body>
          {children}
          {scripts}
        </body>
      </html>
    )}
  />
));