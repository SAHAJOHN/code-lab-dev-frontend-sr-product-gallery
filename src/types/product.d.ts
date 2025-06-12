export type ProductReviewType = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

export type ProductMetaType = {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
};

export type ProductDimensionsType = {
  width: number;
  height: number;
  depth: number;
};

export type ProductItemType = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: ProductDimensionsType;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: ProductReviewType[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: ProductMetaType;
  images: string[];
  thumbnail: string;
};

export type ProductApiResponseType = {
  products: ProductItemType[];
  total: number;
  skip: number;
  limit: number;
};
