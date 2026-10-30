import { ApiProperty } from "@nestjs/swagger";

export class CreateProduitDto {
    @ApiProperty({description:"the name of the product"})
    name: string;
    @ApiProperty({description:"the price of the product"})
    price: number;
    @ApiProperty({description:"the description of the product"})
    description: string;
}
