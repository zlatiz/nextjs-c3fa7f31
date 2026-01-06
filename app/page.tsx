import Image from "next/image";
import Button from "../components/ui/button";
import Card from "../components/ui/card";

const IMAGES: string[] = [
  "https://garberbrosinc.com/websites/garberbrosinc/templates/GarberBrosInc/images/logo.png",
  "https://garberbrosinc.com/websites/garberbrosinc/images/home-vessels.jpg",
  "https://garberbrosinc.com/websites/garberbrosinc/images/home-employment.jpg",
  "https://garberbrosinc.com/websites/garberbrosinc/images/home-contact.jpg"
];

export default function Page() {
  const images = Array.isArray(IMAGES) ? IMAGES : [];
  const heroImage = images[1] ?? images[0];
  const galleryThumbs = images.slice(1);

  return (
    <>
      <section className="pt-10 pb-8 grid gap-8 md:grid-cols-12 items-start">
        <div className="md:col-span-5 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">Garber Bros Inc</h1>
          <p className="mt-4 text-slate-700">For over 55 years, Garber Bros Inc., based in Morgan City, LA, has been a leading provider of marine transportation services for the offshore oil and gas industry. We pride ourselves on supplying the absolute best marine services to all types of industries. Contact Garber Bros Inc. for all your marine transportation and service needs.</p>
          <div className="mt-6 flex gap-4">
            <Button href="/vessels" variant="primary">View Our Fleet of Vessels</Button>
            <Button href="/contact" variant="ghost">Contact Us</Button>
          </div>
        </div>
        <div className="md:col-span-7">
          <div className="rounded-md overflow-hidden shadow-sm bg-slate-50">
            {heroImage ? (
              (() => {
                const safeSrc = encodeURI(heroImage);
                return (
                  <Image src={safeSrc} alt="Hero - Garber Bros vessels" width={1200} height={700} className="w-full h-auto object-cover" unoptimized />
                );
              })()
            ) : null}
            <div className="p-4 bg-gradient-to-t from-white/80 to-transparent">
              <div className="text-sm text-slate-600">Split hero: headline left, slideshow right (image shown)</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-semibold mb-6">Highlights</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <div className="aspect-[4/3] bg-slate-100 rounded-md overflow-hidden">
              {(() => {
                const safeSrc = encodeURI(images[1]);
                return <Image src={safeSrc} alt="Our Vessels" width={800} height={600} className="w-full h-full object-cover" unoptimized />;
              })()}
            </div>
            <h3 className="mt-4 text-lg font-medium">Our Vessels</h3>
            <p className="mt-2 text-slate-700">Garber Bros Inc has an elite fleet of vessels of use in all types of projects.</p>
            <div className="mt-4">
              <a href="/vessels" className="inline-block text-sm font-medium text-primary underline">View Our Vessels »</a>
            </div>
          </Card>

          <Card>
            <div className="aspect-[4/3] bg-slate-100 rounded-md overflow-hidden">
              {(() => {
                const safeSrc = encodeURI(images[2]);
                return <Image src={safeSrc} alt="Employment Application" width={800} height={600} className="w-full h-full object-cover" unoptimized />;
              })()}
            </div>
            <h3 className="mt-4 text-lg font-medium">Employment</h3>
            <p className="mt-2 text-slate-700">Interested in working at Garber Bros? Download our employment application.</p>
            <div className="mt-4 flex gap-3">
              <a href="/websites/garberbrosinc/images/application.pdf" className="inline-block bg-primary text-primary-foreground px-4 h-10 leading-10 rounded-md whitespace-nowrap">View Our Employment Application »</a>
              <a href="http://www.goodhiring.com/garberbrosinc/apply/open" className="inline-block px-4 h-10 leading-10 rounded-md border border-slate-200 text-slate-800 whitespace-nowrap">Apply Online</a>
            </div>
          </Card>

          <Card>
            <div className="aspect-[4/3] bg-slate-100 rounded-md overflow-hidden">
              {(() => {
                const safeSrc = encodeURI(images[3]);
                return <Image src={safeSrc} alt="Contact Garber Bros" width={800} height={600} className="w-full h-full object-cover" unoptimized />;
              })()}
            </div>
            <h3 className="mt-4 text-lg font-medium">Contact Us</h3>
            <p className="mt-2 text-slate-700">To contact Garber Bros Inc regarding vessel availability, click here.</p>
            <div className="mt-4">
              <a href="/contact" className="inline-block bg-white border border-slate-200 px-4 h-10 leading-10 rounded-md text-slate-900 whitespace-nowrap">Contact Garber Bros Inc »</a>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {Array.isArray(images) ? (Array.isArray(images) ? images : []).map((src, idx) => {
            const safeSrc = encodeURI(src);
            const alt = idx === 0 ? 'Logo' : idx === 1 ? 'Vessels' : idx === 2 ? 'Employment' : 'Contact';
            return (
              <div key={idx} className="rounded-md overflow-hidden bg-slate-50 border border-slate-100">
                <Image src={safeSrc} alt={alt} width={600} height={420} className="w-full h-auto object-cover" unoptimized />
              </div>
            );
          }) : null}
        </div>
        <div className="mt-6 text-sm text-slate-600">Use the thumbnails above to view branding and subject imagery related to Garber Bros Inc.</div>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-semibold mb-4">Useful Links</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="/about" className="text-slate-800 underline">About Us</a>
          <a href="/lock-status" className="text-slate-800 underline">Lock Status</a>
          <a href="/barges" className="text-slate-800 underline">Barges</a>
          <a href="contact.aspx" className="text-slate-800 underline">Contact (legacy)</a>
          <a href="#" className="text-slate-800 underline">Back to top</a>
        </div>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-semibold mb-4">Slideshow Controls (static)</h2>
        <div className="flex gap-4">
          <a href="javascript:previousSlide6347994()" className="px-4 h-10 leading-10 rounded-md border border-slate-200 whitespace-nowrap">Prev</a>
          <a href="javascript:nextSlide6347994()" className="px-4 h-10 leading-10 rounded-md border border-slate-200 whitespace-nowrap">Next</a>
        </div>
      </section>
    </>
  );
}
