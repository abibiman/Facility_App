import { useRef } from "react";
import { Stack, Box, Container, Typography } from "@mui/material";

import { useSettingsContext } from "src/components/settings";
import BioData from "./components/bio-data";
import WelcomeScreen from "./components/welcome-screen";
import Carousel, { CarouselArrows, useCarousel } from "src/components/carousel";

export default function OnboardingView() {
  const settings = useSettingsContext();
  const carousel = useCarousel({
    infinite: false,
    slidesToShow: 1,
  });

  return (
    <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
      <WelcomeScreen carousel={carousel} />
      <BioData carousel={carousel} />
    </Carousel>
  );
}
