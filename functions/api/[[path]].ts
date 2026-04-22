import app from "../../app/api/boot";
import { handle } from "hono/cloudflare-pages";

export const onRequest = handle(app);
