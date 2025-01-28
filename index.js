const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.get("/die/all/humanity", (req, res) => {
  res.json({ Die: " world" });
});


app.post("/path", (req, res) => {
  console.log(req.body);
  res.json({ Die: fizzBuzz(req.body.numbers) });
});


app.put("/die/all/humanity", (req, res) => {
  console.log(req.body);
  res.json({ Die: req.body.name });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
function fizzBuzz(numbers) {
    return numbers;
}

