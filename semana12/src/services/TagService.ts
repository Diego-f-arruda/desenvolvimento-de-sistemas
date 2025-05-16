
import { Tag } from "@prisma/client";
import { prisma } from "../prisma/client";

class TagService {
    public async create(name: string): Promise<void> {
        const tag: Tag = {
            id: crypto.randomUUID(),
            name: name,
            createdAt: new Date(),
            updatedAt: new Date(), 
        }

        await prisma.tag.create({ data: tag});
    }
}

export const tagService = new TagService();