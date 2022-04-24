import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(
    @Body('ClientName') ClientName: string,
    @Body('RegionDelivery') RegionDelivery: string,
    @Body('ProjectType') ProjectType: string,
    @Body('Technology') Technology: string,
    @Body('RequirementType') RequirementType: string,
    @Body('Location') Location: string,
    @Body('ResourceType') ResourceType: any,
  ) {
    const generatedId = this.productsService.insertProduct(
      ClientName,
      RegionDelivery,
      ProjectType,
      Technology,
      RequirementType,
      Location,
      ResourceType,
    );
    return { id: generatedId };
  }

  // @Get()
  // getAllProducts() {
  //   return this.productsService.getProducts();
  // }

  // @Get(':id')
  // getProduct(@Param('id') prodId: string) {
  //   return this.productsService.getSingleProduct(prodId);
  // }

  // @Patch(':id')
  // updateProduct(
  //   @Param('id') prodId: string,
  //   @Body('title') prodTitle: string,
  //   @Body('description') prodDesc: string,
  //   @Body('price') prodPrice: number,
  // ) {
  //   // this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
  // }
}
