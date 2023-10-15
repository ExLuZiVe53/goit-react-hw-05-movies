import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [films, setFilms] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllFilms = async () => {
      try {
        setIsLoading(true);
        const filmsData = await fetchFilms();
        setFilms(filmsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllFilms();
  }, []);
  return <div>HomePage</div>;
};

export default HomePage;
