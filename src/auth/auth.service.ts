import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService) {}

    // async signIn(username: string, pass: string): Promise<any> {
    //     const user = await this.usersService.findOne(username);
    //     if(user?.password !== pass) {
    //         throw new UnauthorizedException();
    //     }
    //     const { password, ...result } = user;
    //     return result;
    // }

    async signInDb(
        username: string, 
        pass: string
    ): Promise<{ access_token: string, data: any }> {
        // throw new Error('Method not implemented.');
        const user = await this.usersService.findByUsername(username);
        if(user?.password !== pass) {
            throw new UnauthorizedException();
        }
        const payload = { userId: user.id, username: user.username }
        const access_token = await this.jwtService.signAsync(payload)
        const verify_token = await this.jwtService.verifyAsync(
            access_token,
            {
                secret: jwtConstants.secret
            }
        )
        return {
            access_token: access_token,
            data: verify_token
        };
    }

    async signIn(
        username: string, 
        pass: string): Promise<{access_token: string, data: any}> {
        const user = await this.usersService.findOne(username);
        if(user?.password !== pass) {
            throw new UnauthorizedException();
        }
        const { password, ...result } = user;
        const payload = { sub: user.userId, username: user.username }
        const access_token = await this.jwtService.signAsync(payload)
        const verify_token = await this.jwtService.verifyAsync(
            access_token,
            {
                secret: jwtConstants.secret
            }
        )
        return {
            access_token: access_token,
            data: verify_token
        };
    }
}
