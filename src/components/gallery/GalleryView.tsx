"use client";

import { Column, Heading, Media, Row, SmartLink } from "@once-ui-system/core";
import { gallery } from "@/resources";

export default function GalleryView() {
  return (
    <Column fillWidth maxWidth={32} gap="64" horizontal="center">
      {gallery.images.map((image, index) => (
        <Column key={index} fillWidth gap="16" horizontal="center">
          <Media
            enlarge
            priority={index < 2}
            sizes="(max-width: 640px) 100vw, 640px"
            radius="m"
            border="neutral-alpha-weak"
            aspectRatio={
              image.aspectRatio ?? (image.orientation === "horizontal" ? "16 / 9" : "3 / 4")
            }
            src={image.src}
            alt={image.alt}
          />
          {image.caption && (
            <Heading as="h2" variant="heading-strong-m" align="center">
              {image.caption}
            </Heading>
          )}
          {image.link && (
            <Row horizontal="center">
              <SmartLink href={image.link.href} suffixIcon="arrowUpRightFromSquare">
                {image.link.label}
              </SmartLink>
            </Row>
          )}
        </Column>
      ))}
    </Column>
  );
}
