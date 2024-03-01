import React from "react";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const BlogCarousel = ({ data }) => {
  return (
    <Carousel className="flex justify-center w-5/6">
      <CarouselContent>
        {data.map((service, index) => (
          <CarouselItem key={index}>
            <Card className="flex h-full w-full p-10 ">
              <div className="flex-row">
                <CardTitle>{service.name}</CardTitle>
                <CardDescription className="py-5 pr-10">{service.description}</CardDescription>
              </div>

              <div className="m-4" key={service.id}>
                <div
                  className="gallery-image"
                  style={{ backgroundImage: `url(${service.img})` }}
                  alt={`Img ${service.name}`}
                />
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default BlogCarousel;

/**
 * Do not delete. For reference, if I ever want to use a carousel.
 */