import { createServer } from "http";
const PORT = process.env.PORT || 8000;

const users = [
    { id: 1, name: "amine" },
    { id: 2, name: "zeki" },
    { id: 3, name: "abdnour" },
];

// Logger middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

// JSON middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    next();
};

// Route handler for GET /api/users
const getUsersHandler = (req, res) => {
    res.end(JSON.stringify(users));
};

// Route handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
    const id = req.url.split("/")[3]; // /api/users/2 → ["", "api", "users", "2"]
    const user = users.find((user) => user.id === parseInt(id));

    if (user) {
        res.end(JSON.stringify(user));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: "User not found" }));
    }
};

// Not found handler
const notFoundHandler = (req, res) => {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "Route not found" }));
};
//Route handler for POST /api/users
const createUserHandler(req, res) => {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk.toString();
    })
}

const server = createServer((req, res) => {
    logger(req, res, () => {
        jsonMiddleware(req, res, () => {
            if (req.url === "/api/users" && req.method === "GET") {
                getUsersHandler(req, res);
            } else if (
                req.url.match(/^\/api\/users\/\d+$/) &&
                req.method === "GET"
            ) {
                getUserByIdHandler(req, res);
            } else {
                notFoundHandler(req, res);
            }
        });
    });
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
