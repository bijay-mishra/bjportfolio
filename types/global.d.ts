declare module "locomotive-scroll" {
    export default class LocomotiveScroll {
      constructor(options: {
        el: HTMLElement | null;
        smooth: boolean;
        [key: string]: any;
      });
    }
  }