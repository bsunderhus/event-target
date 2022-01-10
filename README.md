# EventTarget with EventMap typings

This project aims to reexport the global definition of [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) but adding new typings definitions that allow Event maps declarations.

## Usage

Event maps is a simple type that can be passed to `EventTarget` constructor as a generic to better specify possible events that will be dispatched by a given `EventTarget`

```ts
type EventMapExample = {
  toggle: CustomEvent<boolean>;
  error: ErrorEvent;
};

const eventTarget = new EventTarget<EventMapExample>();

eventTarget.addEventListener("error", (e) => e /* ErrorEvent */);
eventTarget.addEventListener("toggle", (e) => e /* CustomEvent<boolean> */);
eventTarget.addEventListener("custom", (e) => e /* Event */);
```
