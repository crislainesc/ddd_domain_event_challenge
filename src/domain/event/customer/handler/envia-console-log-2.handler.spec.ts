import Customer from '../../../entity/customer';
import CustomerCreatedEvent from '../customer-created.event';
import EnviaConsoleLog2Handler from './envia-console-log-2.handler';

describe('Customer EnviaConsoleLog2Handler', () => {
  it('should handle customer created event', () => {
    const handler = new EnviaConsoleLog2Handler();
    const spy = jest.spyOn(console, 'log');
    const customer = new Customer('1', 'Customer', 100);

    handler.handle(new CustomerCreatedEvent(customer));

    expect(spy).toHaveBeenCalledWith(
      'Esse é o segundo console.log do evento: CustomerCreated'
    );
  });
});
