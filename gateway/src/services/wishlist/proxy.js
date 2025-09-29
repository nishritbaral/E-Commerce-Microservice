import { createProxyMiddleware } from "http-proxy-middleware";

const wishlistProxy = createProxyMiddleware({
  target: "http://wishlistservicet:8004",
  changeOrigin: true,
  pathRewrite: { "^/wishlist": "" },
});

export default wishlistProxy;
