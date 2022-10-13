export function assetRootPath(src) {
  if (!src) return "";

  return `${
    src.startsWith("/") && process.env.DEPLOY_MODE === "ipfs" ? "." : ""
  }${src}`;
}
