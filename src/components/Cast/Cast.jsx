import { fetchCastById } from 'components/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const abortCTRL = new AbortController();

    const fetchData = async () => {
      try {
        const actors = await fetchCastById({ id, abortCTRL });

        setCast(
          actors
            .map(obj => {
              if (!obj.profile_path) {
                return null;
              }
              return {
                id: obj.id,
                name: obj.name,
                profile_path: obj.profile_path,
                character: obj.character,
              };
            })
            .filter(obj => obj !== null)
        );
      } catch {
      } finally {
      }
    };
    fetchData();
    return () => {
      abortCTRL.abort();
    };
  }, [id]);

  return (
    <div>
      {cast &&
        cast.map(act => (
          <li key={act.id}>
            {act.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${act.profile_path}`}
                alt={act.name}
                width={100}
                height={150}
              />
            )}
            <p>{act.name}</p>
            <p>character: {act.character}</p>
          </li>
        ))}
    </div>
  );
};
export default Cast;
