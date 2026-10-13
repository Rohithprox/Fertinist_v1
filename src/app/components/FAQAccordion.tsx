import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Is the egg retrieval procedure painful?",
    answer: "No, the procedure is performed under light sedation. You will be asleep and comfortable. Most patients experience mild cramping similar to a period afterwards, which resolves within 24 hours."
  },
  {
    question: "How long is the recovery period?",
    answer: "Most patients return to normal activities within 1-2 days after egg retrieval. We recommend taking it easy for 24 hours, avoiding strenuous exercise for a few days, and following any specific post-procedure instructions provided by your doctor."
  },
  {
    question: "What are the success rates?",
    answer: "Success rates vary based on age, overall health, and individual circumstances. At Fertinest, we maintain a 95% success rate. During your consultation, we'll discuss your specific situation and provide personalized expectations."
  }
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="absolute content-stretch flex flex-col gap-[23.184px] items-start left-[193px] right-[203.71px] top-[3210.48px]" data-name="FAQ Container">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white relative rounded-[23.184px] shrink-0 w-full"
          data-name="FAQ Item"
        >
          <div className="content-stretch flex flex-col items-start overflow-clip p-[1.449px] relative rounded-[inherit] size-full">
            <button
              onClick={() => toggleFAQ(index)}
              className="relative shrink-0 w-full cursor-pointer hover:bg-gray-50 transition-colors"
              data-name="Question Button"
            >
              <div className="flex flex-row items-center size-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[34.776px] relative size-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <div className="flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#001e2c] text-[26.082px]">
                      <p className="leading-[40.572px]">{faq.question}</p>
                    </div>
                  </div>
                  <div className="h-[17.388px] relative shrink-0 w-[17.388px]">
                    <ChevronDown
                      className={`w-full h-full text-[#943687] transition-transform duration-200 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
              </div>
            </button>
            {openIndex === index && (
              <div className="relative shrink-0 w-full" data-name="Answer Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[34.776px] px-[34.776px] relative size-full">
                  <div className="flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#414753] text-[23.184px] w-full">
                    <p className="leading-[37.674px]">{faq.answer}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div aria-hidden="true" className="absolute border-[#c1c6d5] border-[1.449px] border-solid inset-0 pointer-events-none rounded-[23.184px]" />
        </div>
      ))}
    </div>
  );
}
