import 'fastify';
import { FastifyReply } from 'fastify';
import { FastifyJWT } from 'fastify-jwt';

declare module 'fastify' {
    interface FastifyRequest {
        user: {
            id: string;
            name: string;
            email: string;
            birthDate: Date;
            createdAt: Date;
            updatedAt: Date;
        },
        jwtVerify(): Promisse<void>
    }

    interface FastifyInstance{
        authenticate(request: FastifyRequest, reply: FastifyReply),
        jwt: {
            sign: FastifyJWT['sign'],
            verify: FastifyJWT['verify'],
            decode: FastifyJWT['decode']
        }
    }
}