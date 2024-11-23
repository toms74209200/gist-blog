import { Node } from "gatsby";
import { Properties } from "csstype";

type PageContext = {
  siteTitle: string;
  title: string;
};

export default function (node: Node) {
  if (node.id !== "SitePage") {
    return null;
  }
  const title = (node.siteMetadata as PageContext).title;
  const [pageTitle, blogTitle] = title.includes("|")
    ? title.split("|")
    : [null, title];
  const blogTitleStyle: Properties = pageTitle
    ? {
        position: "absolute",
        bottom: "1rem",
        right: "3rem",
        fontSize: "1.5rem",
      }
    : {
        margin: "1rem",
        maxWidth: "630px",
        fontSize: "3.75rem",
        lineHeight: 1.5,
      };
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        fontSize: 32,
        fontWeight: 600,
      }}
    >
      test
    </div>
  );
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        fontSize: 32,
        fontWeight: 600,
      }}
    >
      {pageTitle && (
        <p
          style={{
            margin: "1rem",
            maxWidth: "630px",
            fontSize: "3.75rem",
            lineHeight: 1.5,
            wordBreak: "break-word",
            whiteSpace: "normal",
          }}
        >
          {pageTitle.trim()}
        </p>
      )}
      <p style={blogTitleStyle}>{blogTitle.trim()}</p>
    </div>
  );
}
