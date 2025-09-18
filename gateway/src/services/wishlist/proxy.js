import { createProxyMiddleware } from "http-proxy-middleware";

const wishlistProxy = createProxyMiddleware({
  target: "http://localhost:8004",
  changeOrigin: true,
  pathRewrite: { "^/wishlist/": "" },
});

export default wishlistProxy;
