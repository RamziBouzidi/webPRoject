import { Injectable } from '@nestjs/common';
import { CreateProduitDto } from './dto/create-produit.dto.js';
import { UpdateProduitDto } from './dto/update-produit.dto.js';
import type { Produit } from './entities/produit.entity.js';

@Injectable()
export class ProduitService {
  private produits: Produit[] = [];
  create(createProduitDto: CreateProduitDto) {
    const newProduit: Produit = {
      id: this.produits.length + 1,
      ...createProduitDto
    };
    this.produits.push(newProduit);
    return newProduit;
  }

  findAll() {
    return this.produits;
  }

  findOne(id: number) {
    const found = this.produits.find(element => element?.id === id);
    return found || `Product with ID ${id} not found`;
  }

  update(id: number, updateProduitDto: UpdateProduitDto) {
    for (let i = 0; i < this.produits.length; i++) {
      const element = this.produits[i];
      if (element.id === id) {
        this.produits[i] = { ...element, ...updateProduitDto };
        return `Product with ID ${id} updated successfully`;
      }
    }
    return `Product with ID ${id} not found`;
  }

  remove(id: number) {
    const found = this.produits.find(element => element?.id === id);
    if (found) {
      this.produits = this.produits.filter(element => element?.id !== id);
      return `Product with ID ${id} removed successfully`;
    }else{
      return `Product with ID ${id} not found`;
    }
    
  }
}
