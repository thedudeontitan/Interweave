import { connect, createDataItemSigner, message, result } from "@permaweb/aoconnect";
import { readFileSync } from "fs";

const processId = "fAQ4929dcQ08dk-O2i7G_QLEEPDhJDy3xLB_B8NF_x0"

const wallet = JSON.parse(
  readFileSync("wallet.json").toString(),
);

export async function addApiDetails(){
  console.log(wallet)

   await message({
    process: processId,
    tags: [
      { name: "Action", value: "AddApiDetails" },
      { name: "key", value: "1" },
      { name: "type", value: "data" },
      { name: "name", value: "Weather API" },
      { name: "description", value: "Some Description" },
      { name: "description", value: "Some Description" },
      { name: "provider", value: "XYZ ORG" },
      { name: "icon", value: "icon" },
    ],
    signer: createDataItemSigner(wallet),
  })
    .then(console.log)
    .catch(console.error);

    // let { Messages, Spawns, Output, Error } = await result({
    //   message: "message-id",
    //   process: processId,
    // });

}