import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";

interface Database {
    users: User[];
    questions: Question[];
}

interface User {
    id: number;
    name: string;
}

interface Question {
    id: number;
    category: string;
    type: string;
    title: string;
    admin: number;
    answers: number[];
    correctAnswer: number[];
}

function readDatabase() {
    return JSON.parse(fs.readFileSync("database.json", "utf8")) as Database;
}

function writeDatabase(json) {
    return fs.writeFileSync("database.json", JSON.stringify(json));
}

function get(request: NextApiRequest, response: NextApiResponse) {
    const database = readDatabase();

    response.status(200).json(database.users);
}

function post(request: NextApiRequest, response: NextApiResponse) {
    const { name } = request.body;

    const database = readDatabase();

    const newUser: User = {
        id: database.users.length > 0 ? database.users.at(-1).id + 1 : 1,
        name,
    };

    database.users.push(newUser);

    writeDatabase(database);

    response.status(201).send(newUser);
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
