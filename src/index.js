const app = require(".//server/express");
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`[INFO-WEB] Started in port ${PORT}`);
});