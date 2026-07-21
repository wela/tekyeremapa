import Image from "next/image";

const PHOTOS = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2QoarngDitRlXHmkZOhisl8wUEFm-VairRy03SSpHMnfEHNI8HM04S5c4TwnJE8E-c5ExvNEcM1djkk9KNxEe-AQtZCzUp-O0CvT-CCKN45spQZwkSRXJlY-6aC0Ih-BVcZp41FhPz_DehCTNIzmW1Di-KFT37UF31HT0zrv_SjMQfZgjofAOQoVgcs6h4nCVNBNN37jbn3gJ4CrTg4_q1DqY1Bik0g8iFIj92tpDTAoKJ9-DsnuHJnSYYkEPFe3wXDQHsuoJtVo8",
    alt: "A lecture hall filled with students cheering during a hackathon presentation",
    offset: false,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8Mi0WeQU2ffd8NNJQF6saX6fI9jX4MjpLAmkrxsre5ZZBRAF1j2DDozLlhVGsRvpeM3aFrJsEXKGmH3oQ8bTTGN1sdYXVr2Yu40U8cLYWCtQBxTPIATo6V4Cq4lT3TcAKhLsGGLhSyEQzMH2KZiuTMDCP2HdeDXhG3_O-_McTlWwskAhCuAmzC9uikikE8zw58pPCqn-JPa0sdwKGwMM3vwRifQN47ImGvE2C6jr2rni-pHJIAmnFFt4Of_YRvIAEHRH6A6RR3fd_",
    alt: "A team of three students huddled over a tablet reviewing a user interface design",
    offset: true,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVhvkwhgKt-u9iojLYp6Vm8kDH9HARZDXM2onIziCWM1m7GWJpCppu5oyCC2znttAZ0qOxdDAwmGTfnucg3WEIDyHUMSMo8sHsNttHZx_xoLauVW7HdLNR3grsLQ-KnVwdGsgQTY3eDZS8WWoQDcQ-9yKtenUe1fbN1hzz-qjELxV2HVsKcrfCz44st7D09mQ0KJaBLdDgFmfsy9Ttqc3WFQTrg8gyJEM2x9XcXtzipx9M7JuAggXuS5roIBmJErTLDBtjgtMJ89Xl",
    alt: "A presenter holding an award trophy on stage with confetti in the air",
    offset: false,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpbIi7ZzFd1wP-5-Xysr0R2jv4F67ihDgKQxMOXWz1m-VqM-u4r0-qsum-QZD5TBHKqLMwjx15CBv_KSWsF_suFHUcbrCCUs271lGKzzmwLT95ZtKpTXvezHHnBhB_aqip5lCRT2i1J_0_MjHbI5QE8XTp-wG--D64I54rHVnKoDAX-EZai_gSSmrJuhN9G1-ztem28LUXpBzK5Ak789g_cTm0YxHSNUHUp9PbjvR9ZMWjv5xC_xRJ9eYJdMJsuu_FT6pssk-RTngR",
    alt: "Post-it notes and wireframe sketches on a glass wall in a workshop space",
    offset: true,
  },
];

export default function RetroGallery() {
  return (
    <section className="py-section-gap px-margin-desktop bg-surface-container-high border-y border-on-surface/5">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display-lg text-headline-md">
            The 2025 Retrospective
          </h2>
          <p className="text-on-surface-variant font-body-md mt-2">
            Relive the energy and innovation from last year&rsquo;s event.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PHOTOS.map((photo) => (
            <div
              key={photo.src}
              className={`h-64 rounded-xl overflow-hidden editorial-border relative${photo.offset ? " md:mt-12" : ""}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
