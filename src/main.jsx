import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")).render(<App />)

const app = require("express")()
app.get("/", (req, res) => res.json({ message: "DOckER!!!" }))
const port = process.env.PORT || 8080
app.listen(port, () =>
  console.log(`app listenning on http://localhost:${port}`)
)
