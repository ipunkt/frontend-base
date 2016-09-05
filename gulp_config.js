var root = {
  src: "src",
  dest: "public"
};

module.exports = {
  "sass": {
    src: root.src + "/css/**/*.{sass,scss,css}",
    dest: root.dest + "/css",
    "gzip": false,
    "autoprefixer": {
      "browsers": ["last 3 version"]
    },
    "options": {
      "indentedSyntax": false,
      "includePaths": []
    }
  },
  "browserify": {
    "src": root.src + "/javascript/app.js",
    "dest": root.dest + "/js/app.js",
    "gzip": false,
  },
  "copy": [
    {
      "src": root.src + "/static/**/*",
      "base": root.src + "/static",
      "dest": root.dest + "/"
    },
  ],
  bower: {
    directory: "./vendor/.bower/"
  },
  webpack: require("./webpack.config"),
  clean: {
    path: root.dest + "/*"
  }
};