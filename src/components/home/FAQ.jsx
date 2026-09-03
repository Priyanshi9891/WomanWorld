import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import { faqs } from "../../data/faqs";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 md:py-32 bg-white">

      <div className="max-w-4xl mx-auto px-5">

        <SectionTitle
          eyebrow="Frequently Asked"
          title="Questions, Answered"
        />

        <div className="mt-14">

          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div
                key={faq.question}
                className="border-b border-[#24151a]/10"
              >

                <button
                  onClick={() =>
                    setOpen(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between py-6 text-left"
                >

                  <span className="font-display text-xl md:text-2xl text-[#ae2831]">
                    {faq.question}
                  </span>

                  {isOpen ? (
                    <Minus
                      size={20}
                      className="text-[#caa229] shrink-0"
                    />
                  ) : (
                    <Plus
                      size={20}
                      className="text-[#caa229] shrink-0"
                    />
                  )}

                </button>

                {isOpen && (
                  <div className="pb-6 pr-8">
                    <p className="text-sm leading-7 text-[#24151a]/60">
                      {faq.answer}
                    </p>
                  </div>
                )}

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}