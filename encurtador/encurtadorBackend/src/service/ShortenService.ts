import { Link } from '@prisma/client'
import crypto from 'crypto'
import { prisma } from '../prisma/client';
import { customAlphabet } from 'nanoid';
import QrCode from 'qrcode';

class ShortenService {
    public async register({ url, shortId}: {url:string, shortId: string | null}){

        const generateNanoId = customAlphabet("0123456789abcdefghijklmnopqrstuvxwyz".toUpperCase(), 5)
        const customId = shortId === null ? generateNanoId() : shortId
        const link = {
            id: crypto.randomUUID(),
            shortId: customId,
            originalUrl: url,
            createdAt: new Date()
        } as Link

        await prisma.link.create({data: link});
        return { shortId: link.shortId }
    }

    public async findByIdentifier(identifier: string) {
        const link = await prisma.link.findUnique({ where: { shortId: identifier}});

        if(!link){
            throw new Error("Not Found")
        }

        return { originalUrl: link.originalUrl}
    }

    public async generateQrCode({url} : {url:string}){
        return await QrCode.toDataURL(url);

    }
}
export const shortenService = new ShortenService()