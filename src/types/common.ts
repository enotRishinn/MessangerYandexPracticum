import Block from '../components/common/block';

export type TProps = Record<string, unknown>;

export type TCallback = (...args: TProps[]) => void;

export type TListener = Record<string, TCallback[]>;

export type TChild = Record<string, Block>;

export type TChildList = Record<string, Block[]>;
