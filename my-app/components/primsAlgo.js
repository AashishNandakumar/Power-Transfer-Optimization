import { powerGridMap } from "./powerGridData";
// const fs = require("fs");

export function prims() {
  const noOfVertex = 32;
  let I = Infinity,
    i,
    j,
    k,
    u,
    v;
  let near = new Array(noOfVertex).fill(I);
  let spanningTree = new Array(2)
    .fill(null)
    .map(() => new Array(noOfVertex - 1));

  //   replace 0 with I
  const modifiedPowerGridMap = powerGridMap.map((row) =>
    row.map((value) => (value === 0 ? I : value))
  );

  // console.log(modifiedPowerGridMap);
  let min = I;
  for (i = 1; i < noOfVertex; i++) {
    for (j = i; j < noOfVertex; j++) {
      if (modifiedPowerGridMap[i][j] < min) {
        min = modifiedPowerGridMap[i][j];
        u = i;
        v = j;
      }
    }
  }
  spanningTree[0][0] = u;
  spanningTree[1][0] = v;
  near[u] = near[v] = 0;

  for (i = 1; i < noOfVertex; i++) {
    if (near[i] != 0 && modifiedPowerGridMap[i][u] < modifiedPowerGridMap[i][v])
      near[i] = u;
    else near[i] = v;
  }

  i = 0;
  while (i < noOfVertex - 1) {
    min = I;
    for (j = 1; j < noOfVertex; j++) {
      if (near[j] != 0 && modifiedPowerGridMap[j][near[j]] < min) {
        min = modifiedPowerGridMap[j][near[j]];
        k = j;
      }
    }

    spanningTree[0][i] = k;
    spanningTree[1][i] = near[k];
    near[k] = 0;

    for (j = 1; j < noOfVertex; j++) {
      if (
        near[j] != 0 &&
        modifiedPowerGridMap[j][k] < modifiedPowerGridMap[j][near[j]]
      )
        near[j] = k;
    }
    i++;
  }

  // console.log("Spanning Tree:");
  // for (let i = 0; i < 2; i++) {
  //   for (let j = 0; j < noOfVertex - 1; j++) {
  //     console.log(`[${i}][${j}] = ${spanningTree[i][j]}`);
  //   }
  // }

  console.log("Spanning Tree:");
  // for (let i = 0; i < noOfVertex - 1; i++) {
  //   console.log(`[${spanningTree[0][i]}][${spanningTree[1][i]}] = ${i + 1}`);
  // }

  // formating into JSON
  const spanningTreeObj = { vertices: [] };

  for (i = 0; i < noOfVertex - 1; i++) {
    const v1 = spanningTree[0][i];
    const v2 = spanningTree[1][i];
    const combinedWeight = modifiedPowerGridMap[v1][v2]; // Use the weight from powerGridMap

    spanningTreeObj.vertices.push({ v1, v2, weight: combinedWeight });
  }

  const spanningTreeJSON = JSON.stringify(spanningTreeObj, null, 2);
  console.log(spanningTreeJSON);

  // fs.writeFileSync("./spanningTree.json", spanningTreeJSON);
  // console.log("file written successfully");
}
