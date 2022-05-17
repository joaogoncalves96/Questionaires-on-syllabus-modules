import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { Database, Question } from "../../database.types";

function readDatabase() {
    return JSON.parse(fs.readFileSync("database.json", "utf8")) as Database;
}

function writeDatabase(json) {
    return fs.writeFileSync("database.json", JSON.stringify(json));
}

function get(request: NextApiRequest, response: NextApiResponse) {
    const database = readDatabase();

    const questionsSortedByCategory = database.questions.sort(
        (a, b) => b.createdAt - a.createdAt
    );

    response.status(200).json(questionsSortedByCategory);
}

function post(request: NextApiRequest, response: NextApiResponse) {
    const { text } = request.body;

    const tokenAsString = Buffer.from(request.cookies.token, "base64").toString(
        "utf8"
    );
    const token = JSON.parse(tokenAsString);
    const id = parseInt(token.id, 10);

    const database = readDatabase();

    const user = database.users.find((user) => user.id === id);

    const newQuestion: Question = {
        id: database.questions.length > 0 ? database.questions.at(-1).id + 1 : 1,
        category: text,
        admin: user.id,
        answers: [],
        createdAt: Date.now(),
        type: "",
        title: "",
        correctAnswer: []
    };

    database.questions.push(newQuestion);

    writeDatabase(database);

    response.status(201).send(newQuestion);
}

function handler(request: NextApiRequest, response: NextApiResponse) {
    switch (request.method) {
        case "GET":
            return get(request, response);
        case "POST":
            return post(request, response);
        default:
            response.status(405).end();
    }
}

export default handler;
