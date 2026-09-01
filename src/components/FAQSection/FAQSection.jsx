// src/components/FAQSection/FAQSection.jsx**

import { useState } from "react";

const faqs = [
{
question: "What is Econnext Lagos 2026?",
answer:
"Econnext Lagos 2026 is a conference bringing together young economists, innovators, entrepreneurs, professionals and leaders to explore the ideas, opportunities and forces shaping Africa's economic future.",
},
{
question: "Who is Econnext for?",
answer:
"Econnext is designed for students, young professionals, entrepreneurs, economists, innovators, policy enthusiasts and anyone interested in Africa's next economic chapter.",
},
{
question: "When and where will the conference take place?",
answer:
"Econnext Lagos 2026 will take place in Lagos, Nigeria. Full venue and programme details will be announced as the conference schedule is finalized.",
},
{
question: "How can I register?",
answer:
"Registration details will be announced soon. Keep an eye on the official Econnext channels for registration dates, ticket information and other updates.",
},
{
question: "Will speakers be announced?",
answer:
"Yes. Speakers and contributors will be announced progressively as the programme takes shape. Follow the conference updates for the latest announcements.",
},
{
question: "Can I volunteer for Econnext?",
answer:
"Yes. Volunteer opportunities will be shared when applications open. Check the Volunteers section and official Econnext updates for more information.",
},
{
question: "Can organisations partner with Econnext?",
answer:
"Yes. Econnext welcomes organisations and individuals interested in contributing to meaningful conversations, stronger connections and opportunities for the next generation.",
},
];

export default function FAQSection() {
const [openIndex, setOpenIndex] = useState(null);

const toggleItem = (index) => {
setOpenIndex((currentIndex) =>
currentIndex === index ? null : index,
);
};

return ( <section
   id="faq"
   className="relative overflow-hidden bg-[#FEFEFE] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
   aria-labelledby="faq-title"
 > <div
     className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#FFC778]/30 blur-[90px] sm:h-96 sm:w-96"
     aria-hidden="true"
   />

```
  <div
    className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#C8F3D9]/60 blur-[90px] sm:h-[28rem] sm:w-[28rem]"
    aria-hidden="true"
  />

  <div className="relative z-10 mx-auto max-w-7xl">
    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
      <div>
        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#F77006] sm:text-sm sm:tracking-[0.25em]">
          Frequently Asked Questions
        </p>

        <h2
          id="faq-title"
          className="mt-4 max-w-xl text-[3.3rem] font-black uppercase leading-[0.84] tracking-[-0.055em] text-[#211A3B] min-[390px]:text-[3.55rem] sm:mt-5 sm:text-6xl sm:tracking-[-0.04em] md:text-8xl"
        >
          What you
          <span className="block text-[#F77006]">need to know.</span>
        </h2>

        <p className="mt-6 max-w-md text-[15px] leading-[1.65] text-[#211A3B]/65 sm:mt-8 sm:text-lg sm:leading-relaxed">
          Got questions about Econnext Lagos 2026? Here are some of the
          things you may want to know before the conversation begins.
        </p>

        <div className="mt-8 hidden rounded-[2rem] bg-[#211A3B] p-7 text-white lg:block">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#22CF01]">
            Still curious?
          </p>

          <p className="mt-3 text-2xl font-black uppercase leading-[0.95]">
            More details are coming as the programme takes shape.
          </p>
        </div>
      </div>

      <div className="w-full">
        <div className="divide-y divide-[#211A3B]/10 border-y border-[#211A3B]/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;
            const buttonId = `faq-question-${index}`;

            return (
              <div key={faq.question}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => toggleItem(index)}
                    className="flex min-h-16 w-full items-center justify-between gap-5 py-5 text-left transition-colors duration-200 hover:text-[#F77006] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F77006] focus-visible:ring-offset-4 sm:min-h-20 sm:py-6"
                  >
                    <span className="max-w-[85%] text-[15px] font-black uppercase leading-[1.15] tracking-[-0.01em] text-[#211A3B] sm:text-lg md:text-xl">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#211A3B]/15 text-lg font-normal text-[#211A3B] transition duration-300 ${
                        isOpen
                          ? "rotate-45 bg-[#211A3B] text-white"
                          : "bg-transparent"
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                </h3>

                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                >
                  <div className="pb-6 pr-12 sm:pb-7 sm:pr-16">
                    <p className="max-w-2xl text-[14px] leading-[1.7] text-[#211A3B]/65 sm:text-base sm:leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-7 rounded-[1.5rem] bg-[#FFC778] p-6 sm:mt-10 sm:rounded-[2rem] sm:p-8 lg:hidden">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#211A3B]/60 sm:text-xs sm:tracking-[0.2em]">
            Still curious?
          </p>

          <p className="mt-3 text-[1.7rem] font-black uppercase leading-[0.9] text-[#211A3B] sm:text-3xl">
            More details are coming as the programme takes shape.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
);
}
