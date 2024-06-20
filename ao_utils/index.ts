"use client";
import { createDataItemSigner, dryrun, result } from "@permaweb/aoconnect";
import { connect } from "@permaweb/aoconnect";

const processId = "fAQ4929dcQ08dk-O2i7G_QLEEPDhJDy3xLB_B8NF_x0";

declare global {
  interface Window {
    arweaveWallet: {
      connect: (foo: string[]) => void;
      disconnect: () => void;
      getActiveAddress: () => void;
    };
  }
}
const ao = connect();
export const addApiDetails = async (handleMId: (value: string) => void) => {
  console.log("here");
  if (typeof window !== "undefined" && window.arweaveWallet) {
    console.log("here 2");
    await window.arweaveWallet.connect(["ACCESS_ADDRESS", "SIGN_TRANSACTION"]);

    try {
      const response = await ao.message({
        process: processId,
        tags: [
          { name: "Action", value: "AddApiDetails" },
          { name: "key", value: "0" },
          { name: "type", value: "data" },
          { name: "name", value: "Weather API" },
          { name: "description", value: "Some Description" },
          { name: "provider", value: "XYZ ORG" },
          { name: "icon", value: "icon" },
        ],
        signer: createDataItemSigner(window.arweaveWallet),
        data: "hello",
      });
      handleMId(response);
      console.log("response:", response);

      const res = await ao.result({
        process: processId,
        message: response,
      });
      console.log("response:", res);
    } catch (error) {
      console.error(error);
    }
  }
};
