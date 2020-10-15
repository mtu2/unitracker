export const calcLetterGrade = (grade) => {
  if (grade > 100 || grade < 0) return "error";
  else if (grade >= 80) return "H1";
  else if (grade >= 75) return "H2A";
  else if (grade >= 70) return "H2B";
  else if (grade >= 65) return "H3";
  else if (grade >= 50) return "P";
  else return "N";
};

export const formatWAM = (wam) => {
  let formatted = wam.toString();
  if (formatted === "100") return formatted;
  switch (formatted.length) {
    case 4:
      return formatted + "0";
    case 2:
      return formatted + ".00";
    default:
      return formatted;
  }
};
