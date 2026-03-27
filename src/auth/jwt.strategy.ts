import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
      super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                  secretOrKey: process.env.JWT_SECRET,
                      });
                        }

                          validate(payload: any) {
                              return payload;
                                }
                                }