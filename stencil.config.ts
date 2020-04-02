import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "wc-digimoney",
  outputTargets: [
    {
      type: "docs-readme"
    },
    {
      type: "www",
      serviceWorker: null // disable service workers
    }
  ]
};
