import { createProxyMiddleware } from "http-proxy-middleware";

const cartProxy = createProxyMiddleware({
  target: "http://cartservice:8003",
  changeOrigin: true,
  pathRewrite: { "^/cart": "" },
});

export default cartProxy;
