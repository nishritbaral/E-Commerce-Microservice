import { createProxyMiddleware } from "http-proxy-middleware";

const productProxy = createProxyMiddleware({
  target: "http://localhost:8002",
  changeOrigin: true,
  pathRewrite: { "^/product/": "" },
});

export default productProxy;
