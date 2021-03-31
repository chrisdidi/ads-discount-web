export type AccountType = {
  id?: number;
  name?: string;
  discounts?: DiscountsAccountsType[] | null;
};

export type DiscountsAccountsType = {
  id?: number;
  min_purchase?: number;
  newPrice?: number;
  freeAd?: number;
  freeQuantity?: number;
};
