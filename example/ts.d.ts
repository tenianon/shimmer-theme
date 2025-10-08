type IsString<T> = T extends string ? true : false;

type Optional<T> = {
  [P in keyof T]?: T[P];
};

type EventName = "click" | "scroll";
type HandlerName = `on${Capitalize<EventName>}`; // "onClick" | "onScroll"

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object
    ? T[K] extends Function
      ? T[K]
      : DeepReadonly<T[K]>
    : T[K];
};


export namespace MyNamespace {
  export type User = {
    name: string;
    address: {
      city: string;
      country: string;
    };
    updateName: (newName: string) => void;
  };
}

type A = MyNamespace.User;


export class NestedArrays {
  [key: number]: number[];
}

type User = {
  name: string;
  address: {
    city: string;
    country: string;
  };
  updateName: (newName: string) => void;
};

type ReadonlyUser = DeepReadonly<User>;

type ParametersRecursive<T> = T extends (...args: infer P) => any ? P : never;

type OverloadParams<T> = T extends {
  (...args: infer A1): any;
  (...args: infer A2): any;
  (...args: infer A3): any;
}
  ? [A1, A2, A3]
  : T extends (...args: infer A) => any
  ? [A]
  : never;

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type PromiseAllType<T extends readonly any[]> = T extends readonly []
  ? Promise<[]>
  : T extends readonly [infer Head, ...infer Tail]
  ? Promise<[UnwrapPromise<Head>, ...UnwrapPromise<Tail>]>
  : Promise<T>;

declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): PromiseAllType<T>;

type Curry<F> = F extends (...args: infer A) => infer R
  ? A extends [infer First, ...infer Rest]
    ? (arg: First) => Rest extends [] ? R : Curry<(...args: Rest) => R>
    : R
  : never;

// 测试
declare function curry<F>(
  fn: F
): F extends (...args: any) => any ? Curry<F> : never;

type DeepPick<T, K extends string> = K extends `${infer First}.${infer Rest}`
  ? First extends keyof T
    ? { [P in First]: DeepPick<T[First], Rest> }
    : never
  : K extends keyof T
  ? { [P in K]: T[P] }
  : never;

type EventMap = {
  click: { x: number; y: number };
  change: { value: string };
  error: Error;
};

type EventKey<T extends EventMap> = keyof T;
type EventHandler<T> = (payload: T) => void;

type ExtractRouteParams<T extends string> =
  T extends `${string}:${infer Param}/${infer Rest}`
    ? { [K in Param | keyof ExtractRouteParams<Rest>]: string }
    : T extends `${string}:${infer Param}`
    ? { [K in Param]: string }
    : {};

type Zip<T extends any[], U extends any[]> = T extends [
  infer T1,
  ...infer TRest
]
  ? U extends [infer U1, ...infer URest]
    ? [[T1, U1], ...Zip<TRest, URest>]
    : []
  : [];

type FromEntries<T extends [string, any][]> = {
  [K in T[number][0]]: Extract<T[number], [K, any]>[1];
};

type Last<T> = T extends [...infer _, infer LastItem]
  ? LastItem extends any[]
    ? Last<LastItem>
    : LastItem
  : never;

type NestedArray = [1, 2, [3, 4, [5, 6]]];
type FinalElement = Last<NestedArray>; // 6

type GetThis<T> = T extends (this: infer This, ...args: any[]) => any
  ? This
  : unknown;

type DeepAwaited<T> = T extends Promise<infer U>
  ? DeepAwaited<U>
  : T extends object
  ? { [K in keyof T]: DeepAwaited<T[K]> }
  : T;

type OverloadReturn<T> = T extends {
  (...args: any): infer R1;
  (...args: any): infer R2;
}
  ? R2
  : T extends (...args: any) => infer R
  ? R
  : never;

type CollectionTypes<T> = T extends Set<infer U>
  ? { type: "set"; value: U }
  : T extends Map<infer K, infer V>
  ? { type: "map"; key: K; value: V }
  : never;

type AsyncReturn<T> = T extends (...args: any) => Promise<infer U>
  ? U
  : T extends (...args: any) => infer R
  ? R
  : never;

type LeafPaths<T, Path extends string = ""> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? LeafPaths<T[K], `${Path}${Path extends "" ? "" : "."}${K}`>
        : never;
    }[keyof T]
  : Path;

// 测试
type User2 = {
  name: string;
  address: {
    city: string;
    country: {
      code: string;
    };
  };
};
type Paths = LeafPaths<User2>; // "name" | "address.city" | "address.country.code"

type AdvancedConstructorParams<T> = T extends abstract new (
  ...args: infer P
) => any
  ? P
  : T extends new (...args: infer P) => any
  ? P
  : never;

type CatchError<F> = F extends (...args: any) => infer R
  ? R extends Promise<any>
    ? unknown
    : never
  : never;

type ReducerAccumulator<F> = F extends (acc: infer Acc, current: any) => any
  ? Acc
  : never;
