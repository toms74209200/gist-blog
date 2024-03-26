const SatoriOGImage = (
  { title }: { title: string },
) => {
  const [pageTitle, blogTitle] = title.split("|");
  return (
    <div
      className={"h-full w-full " +
        "flex flex-col items-center justify-center " +
        "bg-white font-bold"}
    >
      {pageTitle && <div className={"m-8 text-4xl"}>{pageTitle.trim()}</div>}
      <div className={"text-2xl"}>{blogTitle.trim()}</div>
    </div>
  );
};

export default SatoriOGImage;
