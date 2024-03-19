import { reviews, Review } from "../../data";

function LandingPage() {
  return (
    <div>
      {reviews.map((data: Review, index: number) => (
        <div key={index}>{data.review}</div>
      ))}
    </div>
  );
}

export default LandingPage;
