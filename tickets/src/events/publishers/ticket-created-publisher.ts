import { Publisher, Subjects, TicketCreatedEvent } from '@jp-tickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}