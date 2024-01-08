export const title = "404 Not Found";
export const url = "/404.html";
export const layout = "layout.tsx";

const NotFoundPage = () => {
  return (
    <main>
      <h1 className="mb-8 text-5xl">404 | Not Found</h1>
      <a className="text-lg text-blue-500 underline" href="/">
        Home
      </a>
    </main>
  );
};

export default NotFoundPage;
