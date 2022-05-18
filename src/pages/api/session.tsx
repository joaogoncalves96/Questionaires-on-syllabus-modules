import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { Database } from "../../database.types";

function readDatabase() {
    return JSON.parse(fs.readFileSync("database.json", "utf8")) as Database;
}

function writeDatabase(json) {
    return fs.writeFileSync("database.json", JSON.stringify(json));
}

function get(request: NextApiRequest, response: NextApiResponse) {
    const tokenAsString = Buffer.from(request.cookies.token, "base64").toString(
        "utf8"
    );
    const token = JSON.parse(tokenAsString);

    // const id = parseInt(token.id, 10);

    const username = token.username;

    // if (isNaN(id)) {
    //     return response.status(403).end();
    // }

    const database = readDatabase();
    const user = database.users.find((user) => user.username === username);

    console.log(user)

    if (!user) {
        return response.status(403).end();
    }

    response.status(200).json(user);
}

function handler(request: NextApiRequest, response: NextApiResponse) {
    switch (request.method) {
        case "GET":
            return get(request, response);
        default:
            response.status(405).end();
    }
}

export default handler;
