import {
  format,
  differenceInCalendarDays,
  differenceInCalendarYears,
  add,
} from "date-fns";

const datePersonStatus = (date) => {
  const personAge = differenceInCalendarYears(new Date(), new Date(date));

  const calcNextBirthday = add(new Date(date), {
    years: personAge + 1,
  });

  const nextBirthdayFormatted = format(
    new Date(calcNextBirthday),
    "dd/MM/yyyy"
  );

  const remainingDaysToBirthday = differenceInCalendarDays(
    new Date(calcNextBirthday),
    new Date()
  );

  const result = `
  Idade: ${Number(personAge)} anos
  Próximo aniversário: ${nextBirthdayFormatted}
  Quantidade de dias faltando para o próximo aniversário: ${remainingDaysToBirthday} dias
  `;

  return result;
};

console.log(datePersonStatus("1999, 02, 24"));
