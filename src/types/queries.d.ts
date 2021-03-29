import { AccountType } from "./schema";

export type GetMyAccountType = {
  myAdAccounts: {
    data: AccountType[];
  };
};
