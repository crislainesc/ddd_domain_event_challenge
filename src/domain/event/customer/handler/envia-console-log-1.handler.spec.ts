import Customer from '../../../entity/customer';
import CustomerCreatedEvent from '../customer-created.event';
import EnviaConsoleLog1Handler from './envia-console-log-1.handler';

describe('Customer EnviaConsoleLog1Handler', () => {
  it('should handle customer created event', () => {
    const handler = new EnviaConsoleLog1Handler();
    const spy = jest.spyOn(console, 'log');
    const customer = new Customer('1', 'Customer', 100);

    handler.handle(new CustomerCreatedEvent(customer));

    expect(spy).toHaveBeenCalledWith(
      'Esse é o primeiro console.log do evento: CustomerCreated'
    );
  });
});
