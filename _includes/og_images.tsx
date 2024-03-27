import { Properties } from "csstype";

export default function ({ title }: { title: string }) {
  const [pageTitle, blogTitle] = title.includes("|")
    ? title.split("|")
    : [null, title];
  const blogTitleStyle: Properties = pageTitle
    ? {
      position: "absolute",
      bottom: "1rem",
      right: "1rem",
      fontSize: "1.5rem",
    }
    : { fontSize: "2.25rem" };
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
        <div style={{ margin: "1rem", fontSize: "2.25rem" }}>
          {pageTitle.trim()}
        </div>
      )}
      <div style={blogTitleStyle}>{blogTitle.trim()}</div>
    </div>
  );
}
