const filter = "qwertyuiopasdfghjklzxcvbnm1234567890-_.";

function solution(new_id) {
  let id = new_id;
  //phase1
  id = id.toLowerCase();

  //phase2
  id = id
    .split("")
    .filter((el) => filter.includes(el))
    .join("");

  //phase3
  while (id.includes("..")) {
    id = id.replace("..", ".");
  }

  //phase4
  if (id[0] === ".") id = id.substring(1);
  if (id[id.length - 1] === ".") id = id.substring(0, id.length - 1);

  //phase5
  if (id === "") id += "a";

  //phase6
  id = id.substring(0, 15);

  if (id[id.length - 1] === ".") id = id.substring(0, id.length - 1);

  //phase7
  while (id.length < 3) {
    id += id[id.length - 1];
  }

  return id;
}

solution("...!@BaT#*..y.abcdefghijklm");
