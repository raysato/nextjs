import { get } from "http";
import React, { useState, useEffect } from "react";
import { prisma } from "../../lib/prismaClient";

async function getOneData() {
    const users2 = await prisma.circle.findUnique({
        where: {
            account_id: 1,
        },
    });
    console.log(users2); // ここでデータを確認できます
    return users2; // この関数を呼び出したところにデータを返します
}

async function getFilteredData() {
    const members = await prisma.member.findMany({
        where: {
            circleId: 1,
        },
    });
    return members;
}

export default async function Home() {
    //データの全件取得
    const users = prisma.account.findMany();

    //データの1件取得
    const users2 = getOneData();

    //編集されたサークル順
    const users3 = await prisma.circle.findMany({
        orderBy: {
            updatedAt: "desc",
        },
        take: 8,
    });

    // id=1のQAを取得
    const users4 = await prisma.qa.findMany({
        where: {
            circleId: 1,
        },
    });

    console.log("全件", users);
    console.log("1件", users2);
    console.log("編集された上位8件", users3);
    console.log("フィルター", users4);

    return (
        <>
            <h1>Api 1</h1>
            {(await users).map((user, index) => (
                <div key={user.id}>
                    <p>id: {user.id}</p>
                    <p>name: {user.name}</p>
                    <p>email: {user.email}</p>
                </div>
            ))}
            <br />
            <h1>Api 3</h1>
            {(await users3).map((user, index) => (
                <div key={user.id}>
                    <p>id: {user.id}</p>
                    <p>name: {user.name}</p>
                    <p>email: {user.twitter_url}</p>
                </div>
            ))}
            <br />
        </>
    );
}
