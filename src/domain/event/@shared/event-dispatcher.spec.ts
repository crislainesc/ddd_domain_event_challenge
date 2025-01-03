import SendEmailWhenProductIsCreatedHandler from '../product/handler/send-email-when-product-is-created.handler';
import ProductCreatedEvent from '../product/product-created.event';
import EventDispatcher from './event-dispatcher';

describe('Domain events tests', () => {
  it('should register an event handler', () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();
    const eventName = 'ProductCreatedEvent';

    eventDispatcher.register(eventName, eventHandler);

    expect(eventDispatcher.getEventHandlers[eventName]).toBeDefined();
    expect(eventDispatcher.getEventHandlers[eventName].length).toBe(1);
    expect(eventDispatcher.getEventHandlers[eventName][0]).toMatchObject(
      eventHandler
    );
  });

  it('should unregister an event handler', () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();
    const eventName = 'ProductCreatedEvent';

    eventDispatcher.register(eventName, eventHandler);
    eventDispatcher.unregister(eventName, eventHandler);

    expect(eventDispatcher.getEventHandlers[eventName]).toBeDefined();
    expect(eventDispatcher.getEventHandlers[eventName].length).toBe(0);
  });

  it('should unregister all event handlers', () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();
    const eventName = 'ProductCreatedEvent';

    eventDispatcher.register(eventName, eventHandler);

    expect(eventDispatcher.getEventHandlers[eventName][0]).toMatchObject(
      eventHandler
    );

    eventDispatcher.unregisterAll();

    expect(eventDispatcher.getEventHandlers[eventName]).toBeUndefined();
    expect(eventDispatcher.getEventHandlers).toEqual({});
  });

  it('should notify all event handlers', () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();
    const eventName = 'ProductCreatedEvent';
    const spyEventHandler = jest.spyOn(eventHandler, 'handle');

    eventDispatcher.register(eventName, eventHandler);

    expect(eventDispatcher.getEventHandlers[eventName][0]).toMatchObject(
      eventHandler
    );

    const productCreatedEvent = new ProductCreatedEvent({
      id: 1,
      name: 'Product 1',
      price: 100,
    });

    eventDispatcher.notify(productCreatedEvent);

    expect(spyEventHandler).toHaveBeenCalled();
  });
});
