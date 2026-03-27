import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
      private usersService: UsersService,
          private jwtService: JwtService,
            ) {}

              async register(email: string, password: string) {
                  const hash = await bcrypt.hash(password, 10);
                      const user = await this.usersService.create({ email, password: hash });
                          return user;
                            }

                              async login(email: string, password: string) {
                                  const user = await this.usersService.findByEmail(email);

                                      if (!user) throw new UnauthorizedException('User not found');

                                          const isMatch = await bcrypt.compare(password, user.password);
                                              if (!isMatch) throw new UnauthorizedException('Invalid password');

                                                  const token = this.jwtService.sign({ id: user.id, email: user.email });

                                                      return { access_token: token };
                                                        }
                                                        }