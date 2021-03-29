export type AccountType = {
  id?: number;
  name?: string;
  discounts?: DiscountsAccountsType[];
};

export type DiscountsAccountsType = {
  min_purchase?: number;
  newPrice?: number;
  freeAd?: number;
  freeQuantity?: number;
};
