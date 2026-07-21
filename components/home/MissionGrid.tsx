import Icon from "@/components/shared/Icon";

const CARDS = [
  {
    icon: "record_voice_over",
    title: "Speech recognition",
    text: "Developing robust ASR models for Twi, Ga, and Ewe to enable voice-to-text functionality.",
  },
  {
    icon: "translate",
    title: "Multilingual support",
    text: "Building translation layers that preserve cultural nuances across multiple Ghanaian dialects.",
  },
  {
    icon: "smartphone",
    title: "Mobile-first design",
    text: "Ensuring accessibility through low-data, high-performance mobile applications for all regions.",
  },
  {
    icon: "psychology",
    title: "AI-powered solutions",
    text: "Leveraging machine learning to solve real-world accessibility challenges in Ghanaian context.",
  },
  {
    icon: "group",
    title: "Community focus",
    text: "Involving native speakers and local communities in every step of the development cycle.",
  },
  {
    icon: "rocket_launch",
    title: "Innovation hub",
    text: "Providing the mentorship and resources needed to take hackathon prototypes to production.",
  },
];

export default function MissionGrid() {
  return (
    <section className="bg-surface-container-low py-20 md:py-section-gap">
      <div className="max-w-container-max mx-auto px-6 md:px-gutter">
        <div className="mb-16">
          <h2 className="font-headline-md text-headline-md text-primary max-w-2xl">
            Bridging communication gaps through technology
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-white p-8 rounded-xl hairline block-shadow-hover transition-all duration-300"
            >
              <div className="w-12 h-12 bg-surface-container flex items-center justify-center mb-6 rounded-lg">
                <Icon name={card.icon} className="text-secondary" />
              </div>
              <h3 className="font-headline-md text-[24px] text-primary mb-4">
                {card.title}
              </h3>
              <p className="font-body-md text-on-surface-variant">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
