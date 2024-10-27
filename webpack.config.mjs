/*
import path from "path";
import { fileURLToPath } from "url";
import nodeExternals from "webpack-node-externals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  target: "node",
  mode: "production",
  entry: "./server/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.cjs",
    chunkFormat: "commonjs", // チャンクフォーマットを指定
    clean: true, // ビルド時にdistフォルダをクリーン
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    node: "current",
                  },
                },
              ],
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
  optimization: {
    moduleIds: "deterministic",
  },
};
*/
// webpack.config.mjs
// webpack.config.mjs
import path from "path";
import { fileURLToPath } from "url";
import nodeExternals from "webpack-node-externals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// サーバーサイド用の設定
const serverConfig = {
  target: "node",
  mode: "production",
  entry: "./server/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.mjs",
    chunkFormat: "module",
    clean: true,
  },
  experiments: {
    outputModule: true,
  },
  externalsPresets: { node: true },
  externals: [
    nodeExternals({
      importType: "module",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    node: "current",
                  },
                  modules: false,
                },
              ],
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      react: path.resolve(__dirname, "node_modules/react"),
      "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
      "react-dom/server": path.resolve(
        __dirname,
        "node_modules/react-dom/server"
      ),
    },
  },
};

// クライアントサイド用の設定
const clientConfig = {
  target: "web",
  mode: "production",
  entry: "./client/index.js", // クライアントエントリーポイントを変更
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "client.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};

export default [serverConfig, clientConfig];
