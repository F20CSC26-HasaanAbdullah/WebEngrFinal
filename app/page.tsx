"use client"
import { TaskForm } from '@/components/taskform'
import React, { useCallback, useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { IoTrashBin } from "react-icons/io5";
import { Button } from '@/components/ui/button';
import { DeleteTask, GetTask } from '@/actions/serversidetask';


const Page = () => {
  const [data, setData] = useState<any>()

  useEffect(() => {
    GetTask()
      .then((data) => {
        setData(data)
      })
  }, [data])

  const handleSubmit = useCallback((id: string) => {
    DeleteTask(id)
  }, []);

  return (
    <div className='flex-col mt-8 w-screen h-full flex items-center  '>
      <div className='flex gap-40 mt-3'>
        <div className='flex flex-col border border-black w-[300px] text-center h-[200px] justify-center items-center bg-blue-200 font-semibold text-2xl rounded-xl'>Total Tasks
          <div className='text-6xl font-mono'>04</div>
        </div>
        <div className='flex flex-col border border-black w-[300px] text-center h-[200px] justify-center items-center bg-green-200 font-semibold text-2xl rounded-xl'>Completed Tasks
          <div className='text-6xl font-mono'>04</div>
        </div>
        <div className='flex flex-col border border-black w-[300px] text-center h-[200px] justify-center items-center bg-yellow-200 font-semibold text-2xl rounded-xl'>Pending
          <div className='text-6xl font-mono'>00</div>
        </div>
      </div>
      <div className='ml-[30px] w-[900px] mt-16'><TaskForm /></div>
      <div className='flex flex-col mt-8 ml-2 gap-y-5 w-[1000px] h-[250px] rounded-2xl'>
        {
          data?.map((task: any, index: number) => {
            return (
              <Card key={index} className='border  border-black'>

                <CardContent className='mt-2'>
                  {task.name}
                </CardContent>
                <CardFooter className=' flex items-center justify-end'>
                  <Button variant='outline' className='rounded-3xl border  border-black bg-green-200 '> ❤ Mark As Completed</Button>
                  <Button variant={'ghost'} onClick={() => handleSubmit(task.id)}>
                    <IoTrashBin className='w-7 h-7' />
                  </Button>
                </CardFooter>
              </Card>
            )
          })
        }
        <div className='flex justify-between'>
          <Button variant={'outline'} className='rounded-xl font-bold text-lg border border-black'>👈 Previous</Button>
          <Button variant={'outline'} className='rounded-xl font-bold text-lg border border-black'> 👉 Next</Button>
        </div>
      </div>
    </div>


  )
}

export default Page
