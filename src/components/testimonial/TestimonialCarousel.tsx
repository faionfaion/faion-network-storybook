import { useState, useEffect, useCallback, useRef, TouchEvent } from 'react';
import TestimonialCard, { TestimonialCardProps } from './TestimonialCard';
import './TestimonialCarousel.css';

export interface TestimonialCarouselProps {
  /** Array of testimonials */
  testimonials: Omit<TestimonialCardProps, 'variant'>[];
  /** Auto-rotation interval in ms (0 to disable) */
  autoRotateInterval?: number;
  /** Pause on hover */
  pauseOnHover?: boolean;
  /** Show navigation arrows */
  showArrows?: boolean;
  /** Show dot indicators */
  showDots?: boolean;
  /** Card variant to use */
  cardVariant?: 'default' | 'featured' | 'compact';
  /** Number of visible cards (1-3) */
  visibleCards?: number;
}

/**
 * TestimonialCarousel - Rotating testimonial display
 *
 * Shows multiple testimonials with auto-rotation and navigation.
 * Follows the "Digital Journal" theme.
 */
export default function TestimonialCarousel({
  testimonials,
  autoRotateInterval = 5000,
  pauseOnHover = true,
  showArrows = true,
  showDots = true,
  cardVariant = 'default',
  visibleCards = 1,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const totalSlides = Math.max(1, testimonials.length - visibleCards + 1);

  const goToSlide = useCallback((index: number) => {
    let newIndex = index;
    if (newIndex < 0) newIndex = totalSlides - 1;
    if (newIndex >= totalSlides) newIndex = 0;
    setCurrentIndex(newIndex);
  }, [totalSlides]);

  const goToNext = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const goToPrev = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  // Auto-rotation
  useEffect(() => {
    if (autoRotateInterval <= 0 || isPaused || testimonials.length <= visibleCards) {
      return;
    }

    const timer = setInterval(goToNext, autoRotateInterval);
    return () => clearInterval(timer);
  }, [autoRotateInterval, isPaused, goToNext, testimonials.length, visibleCards]);

  // Touch handlers
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }

    touchStartX.current = null;
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      goToPrev();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <div
      className="fn-carousel"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Testimonials carousel"
      ref={carouselRef}
    >
      {/* Navigation Arrow - Previous */}
      {showArrows && testimonials.length > visibleCards && (
        <button
          className="fn-carousel__arrow fn-carousel__arrow--prev"
          onClick={goToPrev}
          aria-label="Previous testimonial"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}

      {/* Slides Container */}
      <div className="fn-carousel__viewport">
        <div
          className={`fn-carousel__track fn-carousel__track--${visibleCards}`}
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="fn-carousel__slide"
              aria-hidden={index < currentIndex || index >= currentIndex + visibleCards}
            >
              <TestimonialCard {...testimonial} variant={cardVariant} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrow - Next */}
      {showArrows && testimonials.length > visibleCards && (
        <button
          className="fn-carousel__arrow fn-carousel__arrow--next"
          onClick={goToNext}
          aria-label="Next testimonial"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}

      {/* Dot Indicators */}
      {showDots && totalSlides > 1 && (
        <div className="fn-carousel__dots" role="tablist">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`fn-carousel__dot ${index === currentIndex ? 'fn-carousel__dot--active' : ''}`}
              onClick={() => goToSlide(index)}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Named export
export { TestimonialCarousel };
