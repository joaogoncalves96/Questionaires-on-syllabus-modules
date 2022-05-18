import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { Database, Question } from "../../database.types"

function readDatabase() {
    return JSON.parse(fs.readFileSync("database.json", "utf8"));
}

function writeDatabase(json) {
    return fs.writeFileSync("database.json", JSON.stringify(json));
}

function get(request, response) {
    const tokenAsString = Buffer.from(request.cookies.token, "base64").toString(
        "utf8"
    );
    const token = JSON.parse(tokenAsString);

    const id = parseInt(token.id, 10);

    if (isNaN(id)) {
        return response.status(403).end();
    }

    const database = readDatabase();
    const user = database.users.find((user) => user.id === id);

    if (!user) {
        return response.status(403).end();
    }

    response.status(200).json(user);
}

function handler(request, response) {
    switch (request.method) {
        case "GET":
            return get(request, response);
        default:
            response.status(405).end();
    }
}

export default handler;
