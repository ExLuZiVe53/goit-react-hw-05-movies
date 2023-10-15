import { fetchReviewById } from 'components/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReview] = useState(null);
  useEffect(() => {
    const abortCTRL = new AbortController();

    const fetchData = async () => {
      try {
        const authors = await fetchReviewById({ id, abortCTRL });

        setReview(
          authors
            .map(obj => {
              if (!obj.content) {
                return null;
              }
              return {
                id: obj.id,
                author: obj.author,
                content: obj.content,
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
  if (!reviews) {
    return <p>LOADING . . .</p>;
  }
  if (reviews.length !== 0) {
    return (
      <div>
        {reviews.map(act => (
          <li key={act.id}>
            <h3>Author: {act.author}</h3>
            <p>{act.content}</p>
          </li>
        ))}
      </div>
    );
  }
  if (reviews.length === 0) {
    return <div> reviews will be writting in future</div>;
  }
};
export default Reviews;
