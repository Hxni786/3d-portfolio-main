declare module "gsap/ScrollSmoother" {
  export class ScrollSmoother {
    static register(gsap: any): void;
    static create(vars: ScrollSmootherVars): ScrollSmoother;
    static get(): ScrollSmoother;
    static refresh(soft?: boolean): void;

    readonly progress: number;
    readonly isPaused: boolean;

    scrollTop(value?: number): number | void;
    paused(value?: boolean): boolean | void;
    scroll(value: number | string, animate?: boolean): void;
    scrollTo(targets: any, vars?: any, position?: any): void;
    kill(): void;
    refresh(soft?: boolean): void;
  }

  export interface ScrollSmootherVars {
    wrapper?: string | Element;
    content?: string | Element;
    smooth?: number;
    speed?: number;
    effects?: boolean | string;
    normalizeScroll?: boolean;
    ignoreMobileResize?: boolean;
    autoResize?: boolean;
    onUpdate?: (self: ScrollSmoother) => void;
    onStop?: (self: ScrollSmoother) => void;
    smoothTouch?: number | boolean;
  }
}
