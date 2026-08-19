import Icon from "@/components/shared/Icon";

// TODO: swap for the lab's own site if you have one beyond this links hub.
const LAB_URL = "https://hci-lab-dcsug.github.io/hci-ugdcs/";

export default function LabLink() {
  return (
    <section className="bg-[#FAF8F5] py-section-gap px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="bg-white rounded-[14px] hairline-border p-10 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="font-headline-md text-headline-md mb-4">The lab</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              The Human-Computer Interaction Lab sits in the Department of
              Computer Science at the University of Ghana. Meet the researchers,
              read our publications, and follow the work we are doing on
              inclusive language technology.
            </p>
          </div>
          <a
            href={LAB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-primary text-white font-body-md font-bold px-8 py-4 rounded-[14px] hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-opacity"
          >
            Visit the lab website
            <Icon name="open_in_new" className="text-base" />
          </a>
        </div>
      </div>
    </section>
  );
}
