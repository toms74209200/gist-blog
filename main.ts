import { serveDir } from "https://deno.land/std/http/file_server.ts";

const handler = (req: Request): Response => {
  return serveDir(req, { fsRoot: "./public" });
};

const server = Deno.listen({ port: parseInt(Deno.env.get("PORT") ?? "8000") });

for await (const conn of server) {
  for await (const { request, respondWith } of Deno.serveHttp(conn)) {
    respondWith(handler(request));
  }
}
