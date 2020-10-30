import * as Koa from "koa";
import * as Router from "@koa/router";
import * as send from "koa-send";

const router = new Router();

router.get("/:entry", async (ctx) => {
  await send(ctx, `${ctx.params.entry}`, { root: `${__dirname}/static` });
});

router.get("/:dir/:file", async (ctx) => {
  const delay = ctx.query.delay ?? 0;
  await new Promise((resolve) => setTimeout(resolve, delay));
  await send(ctx, `${ctx.params.dir}/${ctx.params.file}`, { root: `${__dirname}/static` });
});

const app = new Koa();

app.use(router.routes());

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});
