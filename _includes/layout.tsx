export default ({ title, children }: Lume.Data, helpers: Lume.Helpers) => (
  <html>
    <head>
      <title>{title}</title>
      <link rel="stylesheet" href="static/styles.css"></link>
    </head>
    <body>
      {children}
    </body>
  </html>
);
