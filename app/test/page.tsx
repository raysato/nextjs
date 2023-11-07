import { get } from "http";
import { prisma } from "../../lib/prismaClient";

async function getData() {
    const res = await fetch("http://localhost:3000/api/circleList");
    console.log("before error");
    if (!res.ok) {
        console.log("error");
    }
    console.log("after error");
    return res.json();
}

async function getData2() {
    const res = await fetch("http://localhost:3000/api/test");
    console.log("before error");
    if (!res.ok) {
        console.log("error");
    }
    console.log("after error");
    return res.json();
}

async function getData3() {
    const res = await fetch("https://qiita.com/api/v2/tags/JavaScript");
    console.log("before error");
    if (!res.ok) {
        console.log("error");
    }
    console.log("after error");
    return res.json();
}

export default async function Home() {
    const users = prisma.user.findMany();

    const users2 = await getData2();
    console.log(users2);

    return (
        <>
            <h1>Users</h1>
            {(await users).map((user, index) => (
                <div key={user.id}>
                    <p>id: {user.id}</p>
                    <p>name: {user.name}</p>
                    <p>email: {user.email}</p>
                </div>
            ))}
            <br />
            {/* {(await users2).map((user, index) => (
                <div key={user.id}>
                    <p>id: {user.id}</p>
                    <p>name: {user.name}</p>
                    <p>email: {user.email}</p>
                </div>
            ))} */}
            <h2>{users2.message}</h2>
        </>
    );
}
