export type TCallback = (...args: TProps[]) => void;

export type TListener = Record<string, TCallback[]>;

export type TProps = Record<string, unknown>;

export type EventConfig = {
    target: HTMLTemplateElement;
    event: string;
    handler: EventListener;
  };
  
export type TPropsWithEvents = TProps & {
    events?: EventConfig[];
  };
