import Address from '../../../entity/address';
import Customer from '../../../entity/customer';
import CustomerUpdatedEvent from '../customer-updated.event';
import EnviaConsoleLogHandler from './envia-console-log.handler';

describe('Customer EnviaConsoleLogHandler', () => {
  it('should handle customer updated event', () => {
    const handler = new EnviaConsoleLogHandler();
    const spy = jest.spyOn(console, 'log');
    const customer = new Customer('1', 'Customer Name', 100);

    const address = new Address('Main St', 'Springfield', 742, '12345');
    customer.changeAddress(address);

    handler.handle(new CustomerUpdatedEvent(customer));

    expect(spy).toHaveBeenCalledWith(
      `Endereço do cliente: ${customer.id}, ${
        customer.name
      } alterado para: ${customer.address.toString()}`
    );
  });
});
