export default function handler(req, res) {
    if (req.method === 'POST') {
        // Поддержка как JSON, так и простых параметров
        const data = req.body || req.query;
        const cookies = data.cookies || "пусто";
        const ua = data.ua || "не определен";
        
        console.log("=== ДАННЫЕ ПОЛУЧЕНЫ ===");
        console.log("Cookies:", cookies);
        console.log("User-Agent:", ua);
        
        return res.status(200).json({ status: "success" });
    }
    
    return res.status(405).send("Method Not Allowed");
}
