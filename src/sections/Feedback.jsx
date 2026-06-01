import feedbacksData from "../feedbacks.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Feedback = () => {
  const feedbacks = feedbacksData.feedbacks;

  return (
    <section id="feedback">
      <div className="feedback-container">
        <div className="feedback-inner animate-bottom">
          <h1>Referencie</h1>
          {feedbacks.length > 0 && (
            <Swiper
              className="animate-bottom"
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
                    <q>{feedback.text}</q>
                    <h2>{feedback.name}</h2>
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
