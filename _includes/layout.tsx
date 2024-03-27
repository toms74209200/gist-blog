export default ({ title, children }: Lume.Data, helpers: Lume.Helpers) => (
  <html>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>{title}</title>
      <link rel="stylesheet" href="static/styles.css"></link>
    </head>
    <body className={"max-w-screen-md px-4 py-8 mx-auto"}>
      {children}
    </body>
  </html>
);
