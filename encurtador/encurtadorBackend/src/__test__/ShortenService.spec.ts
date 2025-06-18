// Sempre que tiver função externa devesse fazer um Mock para forcar a informação
import { prisma } from "../prisma/client"
import { shortenService } from "../service/ShortenService"

jest.mock('nanoid', () => {
    return {
        customAlphabet: jest.fn().mockReturnValue(() => 'ABCDE')
    }
})

jest.mock('../prisma/client', () => {
    return {
        prisma: {
            link: {
                create: jest.fn()
            }
        }
    }
})



describe("Shorten Service Test", () => {
    it("Deve testar receber uma URL e retornar um shortId", async () => {

        const result = await shortenService.register({ url: "www.teste.com/essa-url-e-longa", shortId: null })

        expect(result).toHaveProperty('shortId')
        expect(result.shortId).toHaveLength(5)
        expect(prisma.link.create).toHaveBeenCalledTimes(1) //para garantir que esta chamando apenas uma vez
        expect(prisma.link.create).toHaveBeenCalledWith(expect.objectContaining({
           data: expect.objectContaining({
               originalUrl: "www.teste.com/essa-url-e-longa",
                shortId: expect.any(String)
           }) 
        }))
    })

    // it("Deve testar ", () => {

    // })

    // it("Deve testar ", () => {

    // })

    // it("Deve testar ", () => {

    // })

    // it("Deve testar ", () => {

    // })
})