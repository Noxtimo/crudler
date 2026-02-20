import { useState, useEffect, useCallback } from 'react';

export const useLoad = (loader) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      const result = await loader();
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [loader]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return { loading, data, error, setData, loadData };
};
