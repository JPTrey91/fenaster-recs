import { Tables } from "../supabase";

export interface Game extends Tables<"games"> {
  discounts: {
    gameId: number;
    discountPercent: number;
    lastChecked: Date;
  };
}
