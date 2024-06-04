import type { TListener, TCallback, TProps } from '../types/common';

export default class EventBus {
  private listeners: TListener;

  constructor() {
    this.listeners = {};
  }

  on(event: string, listener: TCallback): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(listener);
  }

  off(event: string, listener: TCallback): void {
    if (!this.listeners[event]) {
      throw new Error(`No listeners found for event: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter((l) => l !== listener);
  }

  emit(event: string, ...args: TProps[]): void {
    if (!this.listeners[event]) {
      throw new Error(`No listeners found for event: ${event}`);
    }

    this.listeners[event].forEach((listener) => listener(...args));
  }
}
