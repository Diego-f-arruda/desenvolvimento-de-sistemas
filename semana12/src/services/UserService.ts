import { User } from "@prisma/client";
import { prisma } from "../prisma/client";
import { hash } from "bcryptjs";

class UserService {
    public async register({name, email, password, birthDate}: CreateUserType): Promise<void> {
        
        const userExist = await prisma.user.findUnique({
            where: { email: email }
        })

        if(userExist){
            throw new Error("Email já cadastrado!")
        }


        const passwordHashed = await hash(password, 10)

        const user: User = {
            id: crypto.randomUUID(),
            name: name,
            email: email,
            password: passwordHashed,
            birthDate: new Date(birthDate),
            createAt: new Date(),
            updateAt: new Date()
        }

        await prisma.user.create({ data: user });
    }


}

export const userService = new UserService();