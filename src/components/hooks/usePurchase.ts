import { useContext } from "react";
import { PurchaseContext } from "../context/PurchaseProvider";

export const usePurchase = () => {
    const context = useContext(PurchaseContext);
    if (!context) {
        throw new Error("useBudget must be used within a BudgetProvider")
    }
    return context;
};