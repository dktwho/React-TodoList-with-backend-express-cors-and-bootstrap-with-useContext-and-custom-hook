import { useState } from 'react';
import { useCallback } from 'react'


const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const oxios = async (path, method = 'GET', body = null, headers = {}) => {
    setLoading(true);
    try {
      if (body) {
        body = JSON.stringify(body);
        headers['Content-Type'] = 'application/json';
      }
      const response = await fetch(path, { method, headers, body });

      if (!response.ok) {
        setError('Error in fetch');
        return 'Error in fetch';
      }

      const data = await response.json();
      setLoading(false);
      return data;

    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return [loading, error, oxios];
};

export default useFetch;
