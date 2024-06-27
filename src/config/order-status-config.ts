import { OrderStatus } from "@/types";

type OrderStatusInfo = {
  label: string;
  value: OrderStatus;
  progressValue: number;
};

export const ORDER_STATUS: OrderStatusInfo[] = [
  { label: "placed", value: "placed", progressValue: 0 },
  {
    label: "awaiting restaurant confirmation",
    value: "paid",
    progressValue: 25,
  },
  { label: "in progress", value: "inProgress", progressValue: 50 },
  { label: "out for delivery", value: "outForDelivery", progressValue: 75 },
  { label: "delivered", value: "delivered", progressValue: 100 },
];
