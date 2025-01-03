export default interface EventInterface<Data = any> {
  dataTimeOccurred: Date;
  eventData: Data;
}
