import { createProxyMiddleware } from "http-proxy-middleware";

const userProxy = createProxyMiddleware({
  target: "http://localhost:8001",
  changeOrigin: true,
  pathRewrite: { "^/user": "" },
});

export default userProxy;
