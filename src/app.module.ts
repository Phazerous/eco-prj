import { PrismaModule } from './database/prisma.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
})
export class AppModule {}
