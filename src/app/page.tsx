import Image from "next/image";
import Link from "next/link";
import { SiteLayout } from "@/components/layout/site-layout";
import { Button } from "@/components/ui/button";
import { Scissors, Droplet, Clock, Heart } from "lucide-react";

export default function Home() {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="relative bg-background min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/30" />
          <Image 
            src="/images/hero-bg.jpg" 
            alt="Stylish haircut being performed"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                A Smooth Salon Experience in Seattle
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-md">
                Inclusive, personalized hair services in a welcoming environment. 
                No gender-based pricing, just quality cuts and color for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
                  <Link href="/booking">Book Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/about">Founder Story</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image 
                src="/images/about-image.jpg" 
                alt="Katelyn, founder of Motley Hair Studio"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-primary font-medium">About</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-6">Haircuts Have No Gender</h2>
              <p className="text-foreground/80 mb-6">
                "Haircuts, to me, have no gender. I've been a licensed cosmetologist since 2013. 
                I'm excited for you all to see my private hair studio!"
              </p>
              <p className="text-foreground/80 mb-8">
                Located at Mosaic Salon & Spa, 1416 NW Ballard Way, 3rd floor, Seattle, WA 98107.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/about">Learn More About Katelyn</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Values Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium">Our Values</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-6">
              Why Choose Motley Hair
            </h2>
            <p className="text-foreground/80">
              We believe that beautiful hair should be accessible to everyone, and your experience should be as special as your style.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Scissors className="h-10 w-10 text-primary" />,
                title: "Personalized Services",
                description: "Custom haircuts and colors designed for your unique style, not your gender."
              },
              {
                icon: <Heart className="h-10 w-10 text-accent" />,
                title: "Inclusive Space",
                description: "A welcoming, LGBTQIA+-affirming environment where everyone feels valued."
              },
              {
                icon: <Droplet className="h-10 w-10 text-secondary" />,
                title: "Quality Products",
                description: "Professional-grade, sustainable products for healthy, vibrant hair."
              },
              {
                icon: <Clock className="h-10 w-10 text-primary" />,
                title: "Dedicated Time",
                description: "Appointments never feel rushed - we take the time your style deserves."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="mb-5">{feature.icon}</div>
                <h3 className="font-serif text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-foreground/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium">Services</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-6">
              Expert Hair Services
            </h2>
            <p className="text-foreground/80">
              From precision cuts to creative color, we offer personalized services to help you express your authentic self.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Short Cut",
                description: "Hair length that is mid ear length. Clippers and/or shears used to cut the sides and back. Top cut with shears. Shampoo wash included.",
                image: "/images/service-short.jpg"
              },
              {
                title: "Mullets & Medium Length",
                description: "Hair length between ear and shoulder length. Shampoo wash included.",
                image: "/images/service-medium.jpg"
              },
              {
                title: "Long Cuts",
                description: "Hair that is currently past your shoulders. This service comes with a wash. No hot tools included when drying.",
                image: "/images/service-long.jpg"
              }
            ].map((service, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <div className="relative h-80 w-full overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 p-6 z-10">
                  <h3 className="font-serif text-xl text-white font-bold mb-2">{service.title}</h3>
                  <p className="text-white/80 text-sm mb-4 line-clamp-2">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium">Testimonials</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-6">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Katelyn truly listens. As a non-binary person, I've never felt more seen in a salon. She gives me exactly what I want without gendering my style.",
                name: "Alex T.",
                image: "/images/testimonial-1.jpg"
              },
              {
                quote: "I've been searching for a stylist who understands curly hair and Katelyn is a miracle worker. Plus, the inclusive atmosphere makes every visit feel special.",
                name: "Jordan M.",
                image: "/images/testimonial-2.jpg"
              },
              {
                quote: "The skill level, attention to detail, and warm environment keep me coming back. Absolutely the best salon experience in Seattle!",
                name: "Sam W.",
                image: "/images/testimonial-3.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="italic text-foreground/80">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-accent text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Look?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Book your appointment today and experience the perfect blend of technical expertise and artistic vision in a welcoming environment.
          </p>
          <Button asChild size="lg" className="bg-white text-accent hover:bg-white/90">
            <Link href="/booking">Book Your Appointment</Link>
          </Button>
        </div>
      </section>
      
      {/* Instagram Feed Preview (Placeholder) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium">Gallery</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-6">
              Follow Our Work
            </h2>
            <p className="text-foreground/80">
              See our latest styles and transformations on Instagram @motleyhair
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="relative aspect-square rounded-md overflow-hidden">
                <Image 
                  src={`/images/insta-${index + 1}.jpg`} 
                  alt={`Instagram post ${index + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="https://instagram.com/motleyhair" target="_blank" rel="noopener noreferrer">
                Follow on Instagram
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
