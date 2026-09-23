export interface SearchableTicket {
  readonly number: string;
  readonly requester: string;
  readonly category: string;
  readonly subject: string;
  readonly openedAt: string;
}

export function filterTickets<T extends SearchableTicket>(
  tickets: readonly T[],
  query: string,
): readonly T[] {
  if (!query) {
    return tickets;
  }

  return tickets.filter((ticket) => {
    const haystack = [
      ticket.number,
      ticket.requester,
      ticket.category,
      ticket.subject,
      ticket.openedAt,
    ]
      .join(' ')
      .toLowerCase();

    return haystack.includes(query);
  });
}
