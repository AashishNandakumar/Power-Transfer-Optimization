import fs from "fs";

export default (req, res) => {
  try {
    const spanningTreeData = fs.readFileSync(
      "../components/spanningTree.json",
      "utf-8"
    );

    const spanningTree = JSON.parse(spanningTreeData);

    res.status(200).json(spanningTree);
  } catch (err) {
    console.error("Error reading Spanning tree JSON file: ", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
