import { User } from "@prisma/client";
import { prisma } from "../prisma/client";
import { compare, hash } from "bcryptjs";
import { FastifyInstance } from "fastify";

class UserService {
    public async register({name, email, password, birthDate}: CreateUserType): Promise<void> {
        
        const userExist = await prisma.user.findUnique({
            where: { email: email }
        })

        if(userExist){
            throw new Error("Email já cadastrado!")
        }


        const passwordHashed = await hash(password, 10) // aqui criptografa...
    

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

    public async login({ email, password }: LoginType, app: FastifyInstance): Promise<string | null> {
        const user = await prisma.user.findUnique({ where: { email: email }})
        if(!user){
            throw new Error("Credencias Inválidas.")
        }

        const passwordIsValid = await compare(password, user.password)
        if(!passwordIsValid) {
            throw new Error("Credencias Inválidas.")
        }

        return app.jwt.sign({
            id: user.id,
            name: user.name,
            email: user.email,
            birthDate: user.birthDate,
            createAt: user.createAt,
            updateAt: user.updateAt
        });
    }

}

export const userService = new UserService();