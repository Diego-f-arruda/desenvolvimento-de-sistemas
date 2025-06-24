// Sempre que tiver função externa devesse fazer um Mock para forcar a informação
import { prisma } from "../prisma/client"
import { shortenService } from "../service/ShortenService"
import QrCode from 'qrcode';

jest.mock('nanoid', () => {
    return {
        customAlphabet: jest.fn().mockReturnValue(() => 'ABCDE')
    }
})

jest.mock('../prisma/client', () => {
    return {
        prisma: {
            link: {
                create: jest.fn(),
                findUnique: jest.fn()
            }
        }
    }
})

jest.mock('qrcode', () => ({ //os parenteses fazem a função do return
    toDataURL: jest.fn()
}))


describe("Shorten Service Test", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    })

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

    it("Deve registar receber uma URL e retornar um shortId", async () => {
        const resultado = await shortenService.register({ url: "www.teste.com/essa-url-e-longa", shortId: "teste" });

        expect(resultado).toHaveProperty('shortId');
        expect(resultado).toEqual({ shortId: 'teste' })
        expect(prisma.link.create).toHaveBeenCalledTimes(1);
        expect(prisma.link.create).toHaveBeenCalledWith(expect.objectContaining({
            data: expect.objectContaining({
                originalUrl: "www.teste.com/essa-url-e-longa",
                shortId: expect.any(String)
            })
        }))
    })

    it("Deve buscar um link pelo shortId existente", async () => {
        const mockShortId = 'teste';
        const mockOriginalUrl = 'www.teste.com.br/teste/teste2/teste3';
        (prisma.link.findUnique as jest.Mock).mockResolvedValue({
            shortId: mockShortId,
            originalUrl: mockOriginalUrl
        });
        
        const result = await shortenService.findByIdentifier(mockShortId)
        expect(result).toEqual({ originalUrl: mockOriginalUrl })
        expect(prisma.link.findUnique).toHaveBeenCalledTimes(1) 
        expect(prisma.link.findUnique).toHaveBeenCalledWith({where: {shortId: mockShortId}}) 
    })

    it("Deve testar buscar o link por um shortId inexistente", async () => {
        const mockShortId = 'teste';

        (prisma.link.findUnique as jest.Mock).mockResolvedValue(null);

        await expect(shortenService.findByIdentifier(mockShortId)).rejects.toThrow('Not found!!!') //espera-se que a shortId passado seja "rejeitado" tendo um "retorno" como Not found
    })

    it("Deve gerar um base64 de um link informado ", async () => {
        const mockUrl = 'https://exemplo.teste.com';
        const mockBase64 = 'data:image/png;base64,exemple';

        (QrCode.toDataURL as jest.Mock).mockResolvedValue(mockBase64)
        const result = await shortenService.generateQrCode({ url: mockUrl})

        expect(result).toEqual({ base64: mockBase64})
        expect(QrCode.toDataURL).toHaveBeenCalledTimes(1)
        expect(QrCode.toDataURL).toHaveBeenCalledWith(mockUrl)
    })

    it("Deve testar ", async () => { //verificar amanha hj nao deu tempo 
        const mockShortId = 'teste';

        (prisma.link.findUnique as jest.Mock).mockResolvedValue(mockShortId)

        await expect(shortenService.register(mockShortId)).rejects.toThrow("Short Id já existe!!!")
    })
})