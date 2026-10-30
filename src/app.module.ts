import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UserModule } from './user/user.module.js';
import { ProduitModule } from './produit/produit.module.js';


@Module({
  imports: [UserModule, ProduitModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
