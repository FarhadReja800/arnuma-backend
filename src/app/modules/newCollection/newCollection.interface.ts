export interface TNewCollection {
  title: string;          // e.g., "NEW COLLECTIONS"
  heading: string;        // e.g., "Best Sweatshirts and tracksuits for everyone!"
  description: string;    // e.g., "Sed do eiusmod tempor incididunt ut labore..."
  buttonText?: string;    // e.g., "SHOP NOW"
  buttonLink?: string;    // redirect URL or target category slug/id
  leftImage: string;      // couple photo image url
  leftImageText?: string; // caption underneath left image (e.g. "Sed do... PETRA VAN DER MEER")
  rightImage: string;     // single man photo image url
  isActive?: boolean;
}
