import { BgIllustration } from "./bg-illustration";
import { CtaContent } from "./cta-content";

export default function Newsletter() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          <div
            className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden"
            data-aos="zoom-y-out"
          >
            <BgIllustration />

            <div className="relative flex flex-col lg:flex-row justify-between items-center">
              <CtaContent />B
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
