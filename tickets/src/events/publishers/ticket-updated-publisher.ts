import { Publisher, Subjects, TicketUpdatedEvent } from '@jp-tickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}