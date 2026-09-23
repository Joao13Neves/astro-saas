export type DayGreeting = 'Bom dia' | 'Boa tarde' | 'Boa noite';

export function greetingForHour(hour: number): DayGreeting {
  if (hour < 12) {
    return 'Bom dia';
  }

  if (hour < 18) {
    return 'Boa tarde';
  }

  return 'Boa noite';
}
