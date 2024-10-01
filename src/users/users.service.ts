import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./users.entity";
import { Repository } from "typeorm";

export type UserDb = any;

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    findByUsername(username: string): Promise<User|null> {
        return this.userRepository.findOneBy({username: username});
    }

    private readonly users = [
        {
            userId: 1,
            username: 'admin',
            password: '1234'
        },
        {
            userId: 1,
            username: 'marlo',
            password: '1234'
        },
        {
            userId: 1,
            username: 'paulo',
            password: '1234'
        }
    ]

    async findOne(username: string): Promise<UserDb | undefined> {
        return this.users.find(user => user.username === username)  
    }
}