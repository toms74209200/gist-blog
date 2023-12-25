export default ({ title, children }: Lume.Data, helpers: Lume.Helpers) => (
  <html>
    <head>
      <title>{title}</title>
      <link rel="stylesheet" href="static/styles.css"></link>
    </head>
    <body className={"max-w-screen-md px-4 pt-16 mx-auto"}>
      {children}
    </body>
  </html>
);
