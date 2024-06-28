"use server";

import { TaskSchema } from "@/components/taskform";
import { z } from "zod"
import { prisma } from "@/lib/db"

export const CreateTask = async (values: z.infer<typeof TaskSchema>) => {
    console.log(values);
    const taskcreate = await prisma.task.create({
        data: {
            name: values.name
        }
    })
    console.log(taskcreate)
}
export const DeleteTask = async (id: string) => {

    const deletetask = await prisma.task.deleteMany({
        where: {
            id: id
        }
    })
    console.log(deletetask)
}
export const GetTask = async () => {

    return await prisma.task.findMany();


}


