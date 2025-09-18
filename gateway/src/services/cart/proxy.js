import { createProxyMiddleware } from "http-proxy-middleware";

const cartProxy = createProxyMiddleware({
  target: "http://localhost:8003",
  changeOrigin: true,
  pathRewrite: { "^/cart/": "" },
});

export default cartProxy;
