import { createRoot } from "react-dom/client";
import SearchApp from "./SearchApp";

const container = document.getElementById("searchRoot");
const root = createRoot(container);
root.render(<SearchApp />);
// TODO: Migrate to TSX
