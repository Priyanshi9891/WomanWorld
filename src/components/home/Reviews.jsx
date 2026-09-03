import { Star } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import { reviews } from "../../data/reviews";

export default function Reviews() {
  return (
    <section className="py-24 md:py-32 bg-[#24151a]">

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <SectionTitle
          eyebrow="Client Love"
          title="Words From Beautiful Women"
          description="Because the best compliment is a returning client."
          light
        />

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white/5 border border-white/10 p-8"
            >

              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={14}
                    fill="#caa229"
                    className="text-[#caa229]"
                  />
                ))}
              </div>

              <p className="font-display text-2xl text-white leading-8 mt-6">
                “{review.text}”
              </p>

              <div className="mt-8">
                <p className="text-sm text-[#ff93b3] font-semibold">
                  {review.name}
                </p>

                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mt-1">
                  {review.service}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}