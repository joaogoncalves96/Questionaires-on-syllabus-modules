import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
// import {database} from "../../../database.json"
import { Database } from "../../database.types";
import { Questions } from "../../database.types";

function readDatabase() {
    return JSON.parse(fs.readFileSync("database.json", "utf8")) as Database;
}

function writeDatabase(json) {
    return fs.writeFileSync("database.json", JSON.stringify(json));
}

function get(request: NextApiRequest, response: NextApiResponse) {
    const database = readDatabase();

    const postsSortedByDateAscending = database.questions.sort(
        (a, b) => a.createdAt - b.createdAt
    );

    response.status(200).json(postsSortedByDateAscending);
}

function post(request: NextApiRequest, response: NextApiResponse) {
    const { questionTitle, answers } = request.body;

    // const tokenAsString = Buffer.from(request.cookies.token, "base64").toString(
    //     "utf8"
    // );

    // console.log("tokenAsString", tokenAsString);

    // const token = JSON.parse(tokenAsString);

    // console.log("token", token);

    // const id = parseInt(token.id, 10);

    // console.log("id", id);

    const database = readDatabase();

    // const user = database.users.find((user) => user.id === id);

    const newQuestion: Questions = {
        id: database.questions.length > 0 ? database.questions.at(-1).id + 1 : 1,
        // id: number;
        questionTitle,
        answers,
        createdAt: Date.now(),
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
