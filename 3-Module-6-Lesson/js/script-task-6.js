function transformUsername({ firstName, lastName, ...otherProps }) {
  return {
    userName: `${firstName} ${lastName}`,
    lastName,
    firstName,
    ...otherProps,
  };
}

console.log(
  transformUsername({
    id: 1,
    firstName: 'Jacob',
    lastName: 'Mercer',
    email: 'j.mercer@mail.com',
    friendCount: 40,
  }),
); // {userName: 'Jacob Mercer', ....}

console.log(
  transformUsername({
    id: 2,
    firstName: 'Adrian',
    lastName: 'Cross',
    email: 'a.cross@hotmail.com',
    friendCount: 20,
  }),
);
