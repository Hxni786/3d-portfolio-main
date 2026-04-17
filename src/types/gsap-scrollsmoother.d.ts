declare module "gsap/ScrollSmoother" {
  export class ScrollSmoother {
    static register(gsap: any): void;
    static create(vars: ScrollSmootherVars): ScrollSmoother;
    static get(): ScrollSmoother;

    readonly progress: number;
    readonly scrollTop: number;
    readonly isPaused: boolean;

    scroll(value: number | string, animate?: boolean): void;
    scrollTo(targets: any, vars?: any): void;
    paused(value?: boolean): boolean | void;
    kill(): void;
    refresh(soft?: boolean): void;
  }

  export interface ScrollSmootherVars {
    wrapper?: string | Element;
    content?: string | Element;
    smooth?: number;
    effects?: boolean | string;
    normalizeScroll?: boolean;
    ignoreMobileResize?: boolean;
    onUpdate?: (self: ScrollSmoother) => void;
    onStop?: (self: ScrollSmoother) => void;
    smoothTouch?: number | boolean;
  }
}
