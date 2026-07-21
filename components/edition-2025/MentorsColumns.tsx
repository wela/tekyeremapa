import Image from "next/image";

const GROUPS = [
  {
    title: "Speech & Therapy",
    mentors: [
      {
        name: "Dr. Joyce Mensah",
        role: "Senior SLP, Korle-Bu",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAiQQzrVwAseE8u5WUkJAFW5UwShAf3ZpmCjfk-paZ3Hw3ckhGtK4CfaP1-CJtaal0ya7zh9M4qgQI-p2c_IhDQz2tG0LjxCYE_8GfTzTHWkYVuQ-eDXQJ-yDk7hiSDl03pS8myNM3HzX3DqgdEDdZjCtzXbC7SuUKaqDvdk-EohDdUx4ihywiky-Hsc6g8mQ-JatL-lpuMVxnvYCdZu5vTf1gOm7NBwd9xhKOYpINE_mO0WX0qsVCS1fKR1YEn_PftmljsxV6njbv1",
        alt: "Portrait of a professional woman with glasses smiling warmly in soft studio lighting",
      },
      {
        name: "Prof. Albert Quayeson",
        role: "Vocal Physiology Expert",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD3MflNk1p0iL3AuhQa9HeWpN1OHvh_mplvDrCm-0MQiFAlhMG4YMYnMFseVzxtuOTHI4MJGvyVKIYqCJGcP3selYpi4QAzq4Ut1ya8YCMTByXu8Cqlyqz1uYRBH0kpNJjQsBjlWlBahDC6Msbaaj6EMM6EFhNf1xNWdkQDuKWXkQAFoYc0m9IVOyKPvaQzGzDT1Dd29BXR30-K6pAu000mf7VX5669Q26dtJEMtQr1dBfk5lGhD04MALPBkcAozv5FwPKX3p5eEWsy",
        alt: "Professional headshot of a middle-aged man with short hair looking focused and academic",
      },
    ],
  },
  {
    title: "Technical Lead",
    mentors: [
      {
        name: "Derek Boateng",
        role: "AI Researcher, Google Research",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuC9JK8QJAk5kzK6xPOvoS2xQADC5Mwl-pR0iC_JEkGK-b02dgW-8xj1GdIGn5wANkOqaREXHDjj6EhG9NwNHJISuaqr-8qEbWehm4TLezIWr6x5-LcxLDUoXHc2Jyd7nvkhkiGjY4KKzgRNdrcrsCyd5lrQQRv69glbLoMVhNKysY5QVXAyHq2lkMalQCYmccm1UBYXlL4bb7xiVv7fbhmG_jBTKglWTKvLX24QjGKCBFzLnPXh3LAKO_aZQQCKMb0NSwMnDM0P138i",
        alt: "Close-up portrait of a young male software engineer with a thoughtful expression",
      },
      {
        name: "Fatima Al-Hassan",
        role: "ML Ops Architect",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAmDyBKyINb8jTJ212FfrY7sdUqbA8BrDPZp_x3ud1QKs5VswXUz7XWFldVb9pU6_UEmDfrvefWZrV15jf3NtIGrlAe8hLyTVyxbTCvtoMu7YqzyHXRRJFaUG7eSt877sL_jLRoB7jSjqSA42zhaY508S2Iz8W26zY_SMU-1DNtIAbK-6oVsP8-Y4nQMX58omViADnEMHaJ7q_kgCQpToZoyQj-fw3Y1AwrZVxoYflA5h-7W_WlLQwHQr-kw8oVC7Ausj-GECgIWbsb",
        alt: "Professional portrait of a woman with braided hair looking directly at the camera with confidence",
      },
    ],
  },
  {
    title: "Accessibility",
    mentors: [
      {
        name: "Samson Tetteh",
        role: "Advocate, GFD",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBSeZ7UV-zZne4XYDfmMAwhqbY4BoSXc0NJq5FvkYp8cWX3wyKpS3_5KZzuuHgkZnvdk2ZMnBlOR5hDFw4jNQj7CY9a99lk8dGsnTp8PUR-VKOBx3K8ex8sK5UisgbR8XJ22N11n_9zCvcQeOwqDu2e-t_Zbj1iFwCTbi_M3sCCnAzCogSBYAS0gFJwjHRat0JNxNQ3oYmAtOoa7SWGNAhGzDDSwJBxoasYORWp1fTVI4UVfwV2V4VDV9JaOD3dQyuianPLypNuh3nZ",
        alt: "Portrait of a man with an intellectual look wearing sophisticated eyewear",
      },
      {
        name: "Esi Appiah",
        role: "UX/Inclusion Specialist",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuB_fCGJFai6jfLhzENJGre5w7fTIz7E5bRbtM56sHIrc4R1mHJ_pZJ38OL4SR4ST2o5zIbL7IxneymVF6TsJWdQUOg7ehBkmfoUjVxpPRLRqaBiorNLDrgonajxIH70aprMLf-5ZlRmMzqyFrKAmSKUx81qqu9r5_-071LIsAYU7hOZa33A3uyDGxzf-PG-_hoqvdy3XaxKlKIvGy38fZPB8tobYyWwYHZ88NFBgO_8rtVrUFPI42oRmg_UJbR5-CMcEtcIY_aVDcxO",
        alt: "Portrait of a young professional woman with a bright, visionary smile",
      },
    ],
  },
];

export default function MentorsColumns() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-gap">
      <h2 className="font-headline-md text-headline-md mb-12">Expert Guidance</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="font-label-caps text-label-caps text-primary border-b border-primary/20 pb-2 mb-6 uppercase tracking-widest">
              {group.title}
            </h3>
            <ul className="space-y-6">
              {group.mentors.map((mentor) => (
                <li key={mentor.name} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden hairline-border">
                    <Image
                      src={mentor.image}
                      alt={mentor.alt}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-body-md font-bold">{mentor.name}</p>
                    <p className="text-xs text-on-surface-variant">
                      {mentor.role}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
