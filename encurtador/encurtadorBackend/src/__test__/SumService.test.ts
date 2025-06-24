import { error } from "console";
import { Divisao, Sum } from "../service/SumService"

describe("sum Service Test", () => {
    test("Deve verificar se a soma é feita corretamente", () => {
        const result = Sum(1, 2);
        expect(result).toBe(3)
    })

    it("Deve verificar se uma divisão é feita corretamente", () => {
        const result = Divisao(10, 5)
        expect(result).toBe(2)
    })

    it("Deve gerar um erro caso o divisor seja zero", () => {
        const result = Divisao(2, 0)
        expect(result).toStrictEqual(new Error ("A divisão por zero não é permitida"))
    
        // usando o throw new Error("A divisão por zero não é permitida")
        // expect(() => Divisao(10, 0)).toThrow("A divisão por zero não é permitida")
    })
})


