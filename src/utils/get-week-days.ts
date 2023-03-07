interface GetWeekDaysParams {
  short?: boolean;
}

export function getWeekDays({ short = false }: GetWeekDaysParams = {}) {
  const formatter = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' });

  const weekDays = Array.from(Array(7).keys())
    .map((day) => formatter.format(new Date(Date.UTC(2021, 5, day))))
    .map((weekDay) => {
      if (short) {
        return weekDay.substring(0, 3).toUpperCase();
      }

      return weekDay.substring(0, 1).toUpperCase().concat(weekDay.substring(1));
    });

  return arrayMove(weekDays, 6, 0);
}

function arrayMove(arr: any[], fromIndex: number, toIndex: number) {
  const element = arr[fromIndex];

  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, element);

  return arr;
}
