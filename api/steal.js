export default function handler(req, res) {
    if (req.method === 'POST') {
        const { cookies, ua } = req.body;
        
        console.log("=== ДАННЫЕ ПОЛУЧЕНЫ ===");
        console.log("Cookies:", cookies);
        console.log("User-Agent:", ua);
        
        return res.status(200).json({ status: "success" });
    }
    
    return res.status(405).send("Method Not Allowed");
}
