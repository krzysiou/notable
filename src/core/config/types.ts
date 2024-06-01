type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

type TitleBarConfig = {
  titleBarHeight: number;
  titleBarColor: string;
};

type Config = {
  titleBarConfig: TitleBarConfig;
};

export type { Config, TitleBarConfig, DeepPartial };
