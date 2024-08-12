import { CloudinaryImage } from '@/app/components/cloudinary-image';
import { getTestimonials } from '@/db/queries';

export async function Testimonials() {
  const testimonials = await getTestimonials();

  return (
    <section className="border-t py-12">
      <div className="mx-auto max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
        <h2 className="text-center text-2xl font-bold">Driven by Feedback</h2>
        <div className="mt-4 columns-1 sm:columns-2 lg:columns-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="pt-4">
              <figure className="rounded-2xl bg-neutral-50 p-8">
                <blockquote className="text-sm leading-6 text-neutral-700">
                  “{testimonial.comment}”
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-start gap-5">
                  <CloudinaryImage
                    src={testimonial.image_url}
                    alt={testimonial.name}
                    height={40}
                    width={40}
                    className="size-10 rounded-full border bg-white object-cover object-center"
                  />
                  <div>
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                    <p className="mt-1 text-sm text-neutral-600">
                      @{testimonial.username}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
