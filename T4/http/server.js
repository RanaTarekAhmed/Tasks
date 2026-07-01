const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const filePath = path.join(__dirname, "books.json");

function readBooks()
 {
    try {
        if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, "[]");
        const data = fs.readFileSync(filePath, "utf8");
        return JSON.parse(data || "[]");
    } 
    catch (err) {
        return [];
    }
}

function saveBooks(books) 
{
    fs.writeFileSync(filePath, JSON.stringify(books, null, 2));
}

const server = http.createServer((req, res) => {

    res.setHeader("Content-Type", "application/json");

    const urlParts = req.url.split("/");
    const route = urlParts[1];
    const id = parseInt(urlParts[2]);

    if (req.method === "GET" && req.url === "/books") 
    {

        const books = readBooks();
        res.writeHead(200);
        return res.end(JSON.stringify(books));
    }

    if (req.method === "GET" && route === "books" && !isNaN(id)) 
    {
        const books = readBooks();
        const book = books.find(book => book.id === id);
        if (!book) 
        {
            res.writeHead(404);
            return res.end(JSON.stringify({
                message: "Book not found!"
            }));
        }

        res.writeHead(200);
        return res.end(JSON.stringify(book));
    }

    if (req.method === "POST" && req.url === "/books") 
    {
        let body = "";
        req.on("data", chunk => {
            body += chunk;
        });
        req.on("end", () => {

            try {
                const newBook = JSON.parse(body);
                if (!newBook.title || !newBook.author || newBook.price === undefined ||newBook.available === undefined) 
                {
                    res.writeHead(400);
                    return res.end(JSON.stringify({
                        message: "Invalid book data. Required fields: title, author, price, available"
                    }));
                }
                const books = readBooks();
                const newId = books.length === 0
                    ? 1
                    : Math.max(...books.map(book => book.id)) + 1;
                newBook.id = newId;
                books.push(newBook);
                saveBooks(books);
                res.writeHead(201);
                res.end(JSON.stringify(newBook));
            }
            catch {

                res.writeHead(400);
                res.end(JSON.stringify({
                    message: "Invalid JSON"
                }));
            }
        });
        return;
    }

    if (req.method === "PUT" && route === "books" && !isNaN(id)) 
    {

        let body = "";
        req.on("data", chunk => {
            body += chunk;
        });
        req.on("end", () => {
            try 
            {
                const updates = JSON.parse(body);
                const books = readBooks();
                const book = books.find(book => book.id === id);

                if (!book) 
                {
                    res.writeHead(404);
                    return res.end(JSON.stringify({
                        message: "Book not found!"
                    }));
                }
                if (updates.title !== undefined) book.title = updates.title;
                if (updates.author !== undefined) book.author = updates.author;
                if (updates.price !== undefined) book.price = updates.price;
                if (updates.available !== undefined) book.available = updates.available;
                saveBooks(books);
                res.writeHead(200);
                res.end(JSON.stringify(book));
            } 
            catch
            {
                res.writeHead(400);
                res.end(JSON.stringify({
                    message: "Invalid!"
                }));
            }
        });
        return;
    }

    if (req.method === "DELETE" && route === "books" && !isNaN(id)) 
    {
        const books = readBooks();
        const index = books.findIndex(book => book.id === id);
        if (index === -1) 
        {
            res.writeHead(404);
            return res.end(JSON.stringify({
                message: "Book not found!"
            }));
        }
        books.splice(index, 1);
        saveBooks(books);
        res.writeHead(200);
        return res.end(JSON.stringify({
            message: "Book deleted successfully!"
        }));
    }
    res.writeHead(404);
    res.end(JSON.stringify({
        message: "Invalid route!"
    }));
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
