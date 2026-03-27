import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
      TypeOrmModule.forRoot({
            type: 'mysql',
                  host: process.env.MYSQLHOST,
                        port: parseInt(process.env.MYSQLPORT || '3306'),
                              username: process.env.MYSQLUSER,
                                    password: process.env.MYSQLPASSWORD,
                                          database: process.env.MYSQLDATABASE,
                                                autoLoadEntities: true,
                                                      synchronize: true,
                                                          }),
                                                              AuthModule,
                                                                ],
                                                                })
                                                                export class AppModule {}