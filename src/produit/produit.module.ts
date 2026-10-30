import { Module } from '@nestjs/common';
import { ProduitService } from './produit.service.js';
import { ProduitController } from './produit.controller.js';

@Module({
  controllers: [ProduitController],
  providers: [ProduitService],
})
export class ProduitModule {}
