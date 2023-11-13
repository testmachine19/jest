const findTopStudent = require("./studentsMaxScore");

describe("findTopStudent", () => {
  it("возвращает студента с наибольшим количеством баллов", () => {
    const data = [
      { name: "Ivan", score: 35, date: "2022-10-11" },
      { name: "Maria", score: 5, date: "2022-10-10" },
      { name: "Olga", score: 0, date: "" },
      { name: "Stepan", score: 35, date: "2022-10-12" },
      { name: "Oleg", score: 9, date: "2022-10-01" },
      { name: "Zanna", score: 15, date: "2022-10-11" },
    ];

    expect(findTopStudent(data)).toEqual({
      name: "Ivan",
      score: 35,
      date: "2022-10-11",
    });
  });

  it("возвращает null для пустых данных", () => {
    expect(findTopStudent([])).toBeNull();
  });

  it("возвращает null, если все студенты имеют 0 баллов", () => {
    const data = [
      { name: "Ivan", score: 0, date: "2022-10-11" },
      { name: "Maria", score: 0, date: "2022-10-10" },
      { name: "Olga", score: 0, date: "" },
    ];

    expect(findTopStudent(data)).toBeNull();
  });

  it("возвращает студента, если один студент в группе", () => {
    const data = [{ name: "Ivan", score: 20, date: "2022-10-11" }];
    expect(findTopStudent(data)).toEqual({
      name: "Ivan",
      score: 20,
      date: "2022-10-11",
    });
  });
});
