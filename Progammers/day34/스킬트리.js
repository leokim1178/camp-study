function solution(skill, skill_trees) {
  let idxSkill = [];
  let answer = 0;
  let skills = [];
  for (let i = 0; i < skill.length; i++) {
    idxSkill.push(i);
    skills.push(skill[i]);
  }

  let available = "";
  let availableArray = [];
  for (let i = 0; i < idxSkill.length; i++) {
    available += idxSkill[i];
    availableArray.push(available);
  }

  for (let i = 0; i < skill_trees.length; i++) {
    let idxbox = "";
    for (let j = 0; j < skill_trees[i].length; j++) {
      const plus = skill_trees[i][j];

      if (skills.includes(plus)) idxbox += skills.indexOf(plus);
    }

    if (availableArray.includes(idxbox) || idxbox[0] == undefined) answer++;
  }

  return answer;
}

function solution2(skill, skill_trees) {
  let count = 0;
  const skillArr = skill.split("");

  for (let i = 0; i < skill_trees.length; i++) {
    const aaa = skill_trees[i]
      .split("")
      .filter((el) => {
        return skillArr.includes(el);
      })
      .join("");

    console.log(aaa);
    if (skill.startsWith(aaa)) {
      count++;
    }
  }
  return count;
}

function solution3(skill, skill_trees) {
  return skill_trees.reduce((acc, cur) => {
    const filter = cur
      .split("")
      .filter((str) => {
        return skill.includes(str);
      })
      .join("");
    console.log(filter);

    return (acc +=
      (skill.includes(filter) && skill.indexOf(filter[0] === 0)) ||
      filter === "");
  }, 0)
    ? 1
    : 0;
}

solution3("CBD", ["BACDE", "CBADF", "AECB", "BDA"]);
