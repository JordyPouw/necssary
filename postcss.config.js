module.exports = (ctx) => ({
  map: ctx.options.map,
  parser: ctx.options.parser,
  plugins: {
    "postcss-import": {},
    cssnano:
      ctx.env === "production"
        ? {
            preset: "default",
            discardComments: { removeAll: true },
          }
        : false,
  },
});
