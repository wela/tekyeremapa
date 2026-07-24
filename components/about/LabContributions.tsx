const CONTRIBUTIONS = [
  {
    label: "Waxal dataset",
    text: "A premier, curated dataset of 5,000+ hours of transcribed speech across five Ghanaian languages.",
  },
  {
    label: "UGSpeechData",
    text: "Proprietary raw audio infrastructure providing high-fidelity training data for deep learning models.",
  },
  {
    label: "Akan/Ewe ASR",
    text: "Pre-trained base models for Automatic Speech Recognition, optimized for local tonal nuances.",
  },
  {
    label: "Akan/Ewe TTS",
    text: "Text-to-Speech models that give Akan and Ewe a natural synthetic voice for assistive and everyday use.",
  },
  {
    label: "Akan and Ewe Keyboard",
    text: "Standardized digital input toolsets for specialized characters in Akan and Ewe orthographies.",
  },
];

export default function LabContributions() {
  return (
    <section className="bg-[#E8EDF2] py-section-gap px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <h2 className="font-headline-md text-headline-md mb-16">
          What the lab brings to the hackathon
        </h2>
        <div className="space-y-12">
          {CONTRIBUTIONS.map((item) => (
            <div
              key={item.label}
              className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center py-6 border-b border-on-surface/10"
            >
              <div className="md:col-span-3">
                <span className="font-stats-mono text-primary uppercase text-sm tracking-widest">
                  {item.label}
                </span>
              </div>
              <div className="md:col-span-9 flex items-center gap-6">
                <div className="h-[1px] bg-on-surface/20 flex-grow hidden md:block" />
                <p className="font-body-lg text-on-surface-variant md:w-2/3">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
