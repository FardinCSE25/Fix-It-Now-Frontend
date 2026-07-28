/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { redirect } from "next/navigation";

type RegisterState = {
    success:boolean;
    statusCode:number;
    message:string;
};

export const registerAction = async (
    prevState:RegisterState|null,
    formData:FormData
):Promise<RegisterState> => {


    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const password = formData.get("password")?.toString().trim();
    const role = formData.get("role")?.toString();

    if(!name || !email || !password || !role){

        return {
            success:false,
            statusCode:400,
            message:"Required fields are missing"
        }

    }



    const payload : any = {
        name,
        email,
        password,
        role
    };


    if(role === "Technician"){

        const workingDays =
            formData
            .get("workingDays")
            ?.toString()
            .split(",")
            .map(day=>day.trim())
            .filter(Boolean);



        payload.experience =
            formData.get("experience")?.toString();


        payload.bio =
            formData.get("bio")?.toString() || "";


        payload.workingDays =
            workingDays;


        payload.startTime =
            formData.get("startTime")?.toString();


        payload.endTime =
            formData.get("endTime")?.toString();

    }

console.log(payload);

    const res = await fetch(
        `${process.env.BACKEND_API_URL}/api/auth/register`,
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload),
            cache:"no-store"
        }
    );



    const result = await res.json();



    if(!result.success){

        return {
            success:false,
            statusCode:result.statusCode,
            message:result.message
        }

    }



    redirect("/login");

}