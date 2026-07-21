import Image from "next/image";

const SHOTS = [
  {
    caption: "Field Data Collection, 2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDz_-hTQBoiFbMjNKahVZLifZWNbQAT8MGQAgD21D-NMfKkVpYU20j160pDAAMqOFgTE-TYxNcfB4CYbyONdbJVt4229UjB4kKCmd9bT8TehmGl0H2r3Oc9IFd7o6lVwKZZybTdoMxAiyKAEBsLWG9Ic3fYp0EXMWWSlT1fcnp94Ag3_7wii72hDZEttvjrt53OWgbXOKT3JCMZmP8c6QyoyE_Agg7GmFCabn0EF3xTGWDyqopVGXtirkO7TwhLrTFntKjtbxMIuZlR",
    alt: "Researchers recording speech samples with handheld devices in a vibrant outdoor Ghanaian market",
  },
  {
    caption: "VR Immersion Testing",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrLvWtyHEuB4dVxtP0AsjL0D0JHLcoOGSfDnnbDVDYi1gQ2WaPKAQ8v5UEQGxhvKno_APrji0XZEA7LF99jOFaTzsMfrerraZHKKKfa231jLvTPpKjLZxS26N4yLPilv4pU9_6E9ToCsU47-neveQp2erkAu9OnAbQTOwbZ-73iumkxvgMjrAOP3yAqLSDda-SPuXzXd2dW04AD35-ncLSHWoc0gWjqZhvT5ph_RYYShBSsOw7WpQhztvR8Aq-YlPqqnx6nUvtitLG",
    alt: "A scientist wearing a VR headset interacting with a linguistic immersion environment",
  },
  {
    caption: "Collaborative Ideation Session",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCiwIlao6lcT3w3LK3jcyJaIvMAHnuDqwfx0IPwNsDiAL8eD9FZnSMbMse05ulT-9FoGNvAB-Z97jfbGVoG-I7JCIFihS83Sw5nM_7koKAmlDrNJ8w2l2-vOD762YtSmb_93q2vvv1AyMwCnFLjY2C_CvItZKtUx0mQqvjo5EkzjvDWbtGiBLF-1tmrYCWoAFtRChZlNeun1wCvzQgdCyKremYlG_hWsD_FmYawprIM7zzKEF4JprRCwbZ1DM1j7ihzaO5ERV0z5vYq",
    alt: "Students and researchers around a whiteboard covered in NLP diagrams and Akan script",
  },
  {
    caption: "Model Optimization in Progress",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCoDy5d9XmAxlgFI2eSzmhgDs1AOrj2ct8jusVOLG2z5Ik7_9DH3uk7yIEgnshB4R5WypLuC-liPmG5-SNf1lb4aDvObApyjGsuCbG9qhAsToFBaMTYjvNAwlKaokpYJWj2gqXPH53f_g5-xHN8KUo4UA0XS1jzUQdVzRLr4L7cLJi556aBvWUAO__wwJgGevQD_T-Z552J4_sGIh9EoWfm0tuFEM2_n1auXJZAtALeBdpho5rvxTdNXnetf1TkeFo6yKhw2cOKNlUv",
    alt: "A monitor displaying speech audio waves and transcription code for an Ewe language model",
  },
];

export default function CandidStrip() {
  return (
    <section className="bg-[#FAF8F5] pb-section-gap px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {SHOTS.map((shot) => (
            <div key={shot.caption} className="space-y-3">
              <div className="relative rounded-[14px] overflow-hidden aspect-[4/3]">
                <Image
                  src={shot.image}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <p className="font-stats-mono text-[11px] text-on-surface-variant/70 uppercase">
                {shot.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
