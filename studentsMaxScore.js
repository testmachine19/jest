function findTopStudent(data) {
  let maxScore = 0;
  let topStudent = null;

  data.forEach((student) => {
    if (student.score > maxScore) {
      maxScore = student.score;
      topStudent = student;
    }
  });

  return topStudent;
}

const dataSet = [
  [
    { name: "Ivan", score: 35, date: "2022-10-11" },
    { name: "Maria", score: 5, date: "2022-10-10" },
    { name: "Olga", score: 0, date: "" },
    { name: "Stepan", score: 35, date: "2022-10-12" },
    { name: "Oleg", score: 9, date: "2022-10-01" },
    { name: "Zanna", score: 15, date: "2022-10-11" },
  ],
  [
    { name: "Margo", score: 0, date: "2022-10-11" },
    { name: "Natalia", score: 25, date: "2022-10-10" },
    { name: "Marina", score: 25, date: "2022-10-01" },
    { name: "Dmitry", score: 25, date: "2022-10-12" },
    { name: "Denis", score: 0, date: "2022-10-02" },
    { name: "Vadimyr", score: 1, date: "2022-10-11" },
  ],
  [
    { name: "Irina", score: 0, date: "2022-10-11" },
    { name: "Vasily", score: 0, date: "2022-10-10" },
    { name: "David", score: 0, date: "2022-10-11" },
    { name: "Kristina", score: 0, date: "2022-10-12" },
    { name: "Varvara", score: 0, date: "2022-10-01" },
    { name: "Tanya", score: 0, date: "2022-10-11" },
  ],
];

dataSet.forEach((data, index) => {
  const topStudent = findTopStudent(data);
  console.log(`Группа ${index + 1}:`);
  if (topStudent) {
    console.log(
      `Поздравляем ${topStudent.name} с максимальным количеством баллов: ${topStudent.score}`
    );
  } else {
    console.log("В этой группе нет результатов.");
  }
});

module.exports = findTopStudent;
