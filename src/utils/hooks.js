import { useEffect, useState } from "react";
import { fetchTransactionData } from "../services/transaction.api";

export const useLoadingWithDataFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchTransactionData().then((data) => {
      setTransaction(data);
      setIsLoading(false);
    });
  }, []);

  return {
    isLoading,
    transaction,
  };
};
