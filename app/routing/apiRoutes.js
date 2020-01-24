// create a module to be used by server.js
module.exports = function (app) {
// ROUTING
app.get("/api/blacklist", function (req, res) {
            res.sendFile(path.join(__dirname, "../public/home.html"));
            res.json(blacklistData);
        });
}