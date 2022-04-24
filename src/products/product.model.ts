import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  ClientName: String,
  RegionDelivery: String,
  ProjectType: String,
  Technology: String,
  RequirementType: String,
  Location: String,
  ResourceType: Object,
});

export interface Product {
  ClientName: string;
  RegionDelivery: string;
  ProjectType: string;
  Technology: string;
  RequirementType: string;
  Location: string;
  ResourceType: any;
}
