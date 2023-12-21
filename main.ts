import { serveFile } from "https://deno.land/std/http/file_server.ts";

const handler = (req: Request): Response => {
  return serveFile(req, "./index.html");
}

const server = Deno.listen({ port: parseInt(Deno.env.get("PORT") ?? "8000") });

for await (const conn of server) {
  for await (const { request, respondWith } of Deno.serveHttp(conn)) {
    respondWith(handler(request));
  }
}
