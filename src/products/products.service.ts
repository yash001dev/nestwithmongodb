import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async insertProduct(
    ClientName,
    RegionDelivery,
    ProjectType,
    Technology,
    RequirementType,
    Location,
    ResourceType,
  ) {
    // const prodId = Math.random().toString();
    const newProduct = new this.productModel({
      ClientName,
      RegionDelivery,
      ProjectType,
      Technology,
      RequirementType,
      Location,
      ResourceType,
    });
    const result = await newProduct.save();
    console.log('RESULT: ', result);
    return result.id as string;
  }

  // getProducts() {
  //   return [...this.products];
  // }

  // getSingleProduct(productId: string) {
  //   const product = this.findProduct(productId)[0];
  //   return { ...product };
  // }

  // updateProduct(productId: string, title: string, desc: string, price: number) {
  //   const product = this.findProduct(productId)[0];
  //   const index = this.findProduct(productId)[1];
  //   const updatedProduct = { ...product };
  //   if (title) {
  //     updatedProduct.title = title;
  //   }
  //   if (desc) {
  //     updatedProduct.desc = desc;
  //   }
  //   if (price) {
  //     updatedProduct.price = price;
  //   }
  //   this.products[index] = updatedProduct;
  // }

  // private findProduct(id: string): [Product, number] {
  //   const productIndex = this.products.findIndex((prod) => prod.id == id);
  //   const product = this.products[productIndex];
  //   if (!product) {
  //     throw new NotFoundException('Could not find product.');
  //   }
  //   return [product, productIndex];
  // }
}
