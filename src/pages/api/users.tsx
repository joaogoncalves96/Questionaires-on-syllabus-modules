import { INSPECT_MAX_BYTES } from "buffer";
import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { useSyncExternalStore, useTransition } from "react";
interface Database {
   users: User[];
   posts: Post[];
}
interface User {
   id: number;
   username: string;
   password: string;
}
interface Post {
   id: number;
   text: string;
   author: number;
   comments: number[];
   points: number;
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
   const { username, password } = request.body;
   const database = readDatabase();
   const newUser: User = {
      id: database.users.length > 0 ? database.users.at(-1).id + 1 : 1,
      username,
      password,
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
