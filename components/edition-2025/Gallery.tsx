import Image from "next/image";

export default function Gallery() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-gap">
      <h2 className="font-headline-md text-headline-md mb-8">Edition Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
        <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl hairline-border">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_LJWvMglivOnB3q2cjwr8lFhAEQB8rWb888OBm_xsF42eTrObm0jO1rrkH54aHDohyhvNtE1x7XseRY_OimwidhUbjey2J1o5pabHw1TQniuU3jMm7govYQ0FwQxR75xdY-rmV0_YwaD_8ctP3tAImiIR7gn3Pky-Iw8oADup-LOPhLqKBHq2RjYYjJBpQLINvKuE3BV9bd6P-1jLFu_6TOCme2x8bOQJo6oidiCVco-wr5VrlcXxTd8mQcEh9GzG-nH0zK0oA1te"
            alt="Wide-angle view of a vibrant hackathon workspace with teams collaborating over laptops and whiteboards"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent text-white">
            <p className="font-label-caps text-xs">UG HCI Lab, Accra</p>
            <p className="font-body-md">
              Collaboration in progress during the midnight sprint.
            </p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-xl hairline-border">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiYe04VxDTgh-tLGIR7FnFQwnoXEpq6Pw5Pe_jCrwP377i0kueoB3Xv1pFVupZaEu3oA_H5WiGQjoTjTl-dwBsbB1TyGAucDiMMgISYSYf8kQKYq51Za3D0CC1dRZXqRE7coBLaRQQj__qcUc72LPjKw76QMcp6W_dzPxzr0WHE_yE9a9H7BlnwNxVPlhHBTLyn1fhNEGwunJNjNjL43TK00eI-zITV9GZRhwQUkWfOfgC88f8LgQwx-eGFfMcmSQWHcAE5cre2WHc"
            alt="Close-up of hands working on a hardware circuit board with colorful wires"
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
            <p className="font-body-md text-sm">Haptic prototyping.</p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-xl hairline-border">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg9tG5f4ZRDjibJrlTRz7DrSUKTR2Ktik6NDCXwWJpyTX8uKAk5zmgRSkek-82r0I6edWfcDbVfj4y8jVDhC1oGGciZ5QTwvw_-C5PDHS-571o5fxQ6dJwS0MCCXQE0-yNPB6J2q81KpUFEkpYvkkRZJG-Wswni6mS5Ssda50jjhj4rP-HDe03b59wnDR4iIKwkgk-Zw_1v_WhJ9TFvj9tHaAb6VJXy6GvQWxcFoaBxbEpt0w3Vwjlyv31W5KfjqOMVUd8a4o0pWwP"
            alt="A speaker presenting on stage at Demo Day with UI designs on a large screen"
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
            <p className="font-body-md text-sm">Demo Day pitches.</p>
          </div>
        </div>
        <div className="md:col-span-2 relative group overflow-hidden rounded-xl hairline-border">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg3n4wPTUhAzYBHMUtChERDki5kkJtnD6Ge_-bs0RHiYMVV6zTzXuGCWH4D7me_kho6C3rBXnaLgvEoA-uwn0q-kjkWUQbwyFuOPBIo4dOzqA1-FwL6D_COlAAvu7ZmKpDEYhEuI4XT-On76GvIhGXSYeKSSGwGisjmwy7mEnYwX2DqTuGUmQQEvRc6arzwT6Kj7QI3_Y15FduYJqbQ7WQTGph0BKQAkyZiaSGddTh0QU8wHtP2EZcoItKF27RiRfkcBWnbe7gEHjc"
            alt="A developer demonstrating a mobile app to a smiling community partner"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
            <p className="font-body-md text-sm">
              Testing real solutions with community partners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
