"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React, { FC, ReactNode } from "react";
interface CardData {
  title: string;
  description: string;
  children: ReactNode;
}
const CardForAUth: FC<CardData> = ({ title, description, children }) => {
  return (
    // <div className="shadow-md shadow-slate-400 rounded-lg bg-white flex justify-center p-4  ">
    <>
      <Card className=" shadow-md flex-col shadow-slate-400 rounded-lg bg-white flex justify-center p-4  ">
        <CardHeader>
          <CardTitle className=" self-center">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      {/* </div> */}
    </>
  );
};

export default CardForAUth;
