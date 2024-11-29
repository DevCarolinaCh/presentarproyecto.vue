function isAdult(user) {
    return user.age >= 18;
}
const juan = {
    name: "Juan Perez",
    age: 23
};
const isJuanAnAdult = isAdult(juan);
console.log(isJuanAnAdult);
