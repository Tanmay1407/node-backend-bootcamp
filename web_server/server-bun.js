import { serve } from "bun";

serve({
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response("Hello! from the Bun Server", { status: 200 });
    } else if (url.pathname == "/namaste") {
      return new Response("Namaste! from the Bun Server", { status: 200 });
    } else return new Response("404 NOT Found", { status: 404 });
  }, port: 3000, hostname: '127.0.0.1'
});
