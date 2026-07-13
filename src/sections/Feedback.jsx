import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Stars = ({ rating }) => (
  <div
    className="feedback-stars"
    aria-label={`Hodnotenie: ${rating} z 5 hviezdičiek`}
  >
    {Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "star star-filled" : "star"}>
        ★
      </span>
    ))}
  </div>
);

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.reviews && data.reviews.length > 0) {
          const mapped = data.reviews.map((review) => ({
            id: review.time,
            image: review.profile_photo_url,
            text: review.text,
            name: review.author_name,
            rating: review.rating,
          }));
          setFeedbacks(mapped);
        }
      })
      .catch((error) => {
        console.error("Nepodarilo sa načítať Google recenzie:", error);
      });
  }, []);

  return (
    <section id="feedback">
      <div className="feedback-container">
        <div className="feedback-inner animate-bottom" data-delay="300">
          <h2>Recenzie</h2>
          {feedbacks.length > 0 && (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 4000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
              loop={true}
            >
              {feedbacks.map((feedback) => (
                <SwiperSlide key={feedback.id}>
                  <div className="feedback-item">
                    <img
                      src={feedback.image}
                      alt={feedback.name}
                      width="160"
                      height="160"
                    />
                    <Stars rating={feedback.rating} />
                    {feedback.text && <q>{feedback.text}</q>}
                    <h3>{feedback.name}</h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
