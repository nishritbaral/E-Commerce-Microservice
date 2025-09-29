import { createProxyMiddleware } from "http-proxy-middleware";

const userProxy = createProxyMiddleware({
  target: "http://userservice:8001",
  changeOrigin: true,
  pathRewrite: { "^/user": "" },
});

export default userProxy;
