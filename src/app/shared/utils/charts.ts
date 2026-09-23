export interface DonutSlice {
  readonly id: string;
  readonly value: number;
  readonly color: string;
}

export interface DonutRing {
  readonly id: string;
  readonly color: string;
  readonly dashArray: string;
  readonly dashOffset: number;
}

export function toDonutRings(
  slices: readonly DonutSlice[],
  circumference: number,
): readonly DonutRing[] {
  const total = slices.reduce((sum, slice) => sum + slice.value, 0);

  if (total <= 0) {
    return [];
  }

  let offset = 0;

  return slices.map((slice) => {
    const length = (slice.value / total) * circumference;
    const ring: DonutRing = {
      id: slice.id,
      color: slice.color,
      dashArray: `${length} ${circumference - length}`,
      dashOffset: -offset,
    };

    offset += length;
    return ring;
  });
}

export function barPercent(value: number, max: number): number {
  if (max <= 0) {
    return 0;
  }

  return Math.min(100, (value / max) * 100);
}

export function maxValue(values: readonly number[]): number {
  return values.reduce((current, value) => Math.max(current, value), 0);
}
