"use client";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { CreateTask } from "@/actions/serversidetask";


export const TaskSchema = z.object({
    name: z.string().min(2, {
        message: "Task must be at least 2 characters.",
    }),
})

export const TaskForm = () => {
    const form = useForm<z.infer<typeof TaskSchema>>({
        resolver: zodResolver(TaskSchema),
        defaultValues: {
            name: "",
        },
    })
    function onSubmit(values: z.infer<typeof TaskSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        CreateTask(values)

    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className="flex flex-row gap-x-3">
                                    <Input placeholder="Enter Task here... " className="font-semibold border border-black w-[1000px]" {...field} />
                                    <Button type="submit">Add Task +</Button>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

            </form>
        </Form>
    )

}



