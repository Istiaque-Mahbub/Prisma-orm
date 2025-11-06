import { Prisma, User } from "@prisma/client"
import { prisma } from "../../config/db"

const createUser = async (payload:Prisma.UserCreateInput):Promise<User> =>{
    console.log(payload)
    const createdUser = await prisma.user.create({
        data:payload
    })
    return createdUser
}

const getAllFromDB = async() =>{
    const result = await prisma.user.findMany({
        select:{
            id:true,
            name:true,
            picture:true,
            isVerified:true,
            status:true,
            phone:true,
            cratedAt:true,
            updatedAt:true,
            email:true,
            posts:true
        },
        orderBy:{
            name:"desc"
        }
    })
    return result
}

const getUserById = async(id:number)=>{
    const result = await prisma.user.findUnique({
        where:{
            id
        },
        select:{
            id:true,
            name:true,
            picture:true,
            isVerified:true,
            status:true,
            phone:true,
            cratedAt:true,
            updatedAt:true,
            email:true,
            posts:true
        }
    })

    return result
}

const updateUser = async (id: number, payload: Partial<User>) => {
 
    const result = await prisma.user.update({
        where: {
            id
        },
        data: payload
    })
    return result;
}

const deleteUser = async (id: number) => {
    const result = await prisma.user.delete({
        where: {
            id
        }
    })
    return result;
}

export const UserService = {
    createUser,getAllFromDB,getUserById,updateUser,deleteUser
}