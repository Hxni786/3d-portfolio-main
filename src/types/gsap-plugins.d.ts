// Broad declarations for GSAP Premium plugins to satisfy the TypeScript compiler during build.
// These allow any import from the gsap namespace and treat them as 'any'.

declare module "gsap/SplitText" {
  export const SplitText: any;
  export type SplitText = any;
}

declare module "gsap/ScrollSmoother" {
  export const ScrollSmoother: any;
  export type ScrollSmoother = any;
}

// Catch-all for other potentially missing GSAP plugins
declare module "gsap/*" {
  const content: any;
  export default content;
  export const ScrollTrigger: any;
  export const ScrollSmoother: any;
  export const SplitText: any;
}
