/*
    도미노

    N개의 도미노가 주어집니다.
    각 도미노는 왼쪽으로 밀려 넘어지거나, 오른쪽으로 밀려 넘어지거나
    밀리지 않은 상태로 시작합니다.

    만약 왼쪽으로 밀려 넘어지는 도미노가 있다면,
    해당 도미노의 왼쪽에 존재하는 도미노는 함께 왼쪽으로 쓰러질 것입니다.
    반대의 경우인 오른쪽으로 밀려 넘어지는 도미노 역시 같은 작용을 야기합니다.

    예외적으로 왼쪽으로 밀려 넘어지는 도미노와 오른쪽으로 밀려 넘어지는 도미노 사이에 존재하는 도미노는
    양쪽에서 영향을 받게 되어 넘어지지 않고 그대로 서있게 됩니다.

    문자열 dominoes를 입력 받아 위의 조건대로 쓰러진 이후의 문자열을 리턴해주세요.

    - 'R', 'L', '.' 세종류의 문자열이 조합된 dominoes가 주어집니다.
    - 오른쪽으로 밀려 넘어지는 도미노는 'R'로 표시됩니다.
    - 왼쪽으로 밀려 넘어지는 도미노는 'L'로 표시됩니다.
    - 어느쪽으로도 밀리지 않은채 시작되는 도미노는 '.'으로 표시됩니다.

    예를 들어,
    '.L.R...LR..L..'
    이러한 구성의 문자열 dominoes가 주어졌다면,
    조건에 맞춰 도미노들이 쓰러진 뒤에는
    'LL.RR.LLRRLL..'
    위와 같은 모양이 됩니다.

    - dominoes 문자열의 길이는 15를 넘지 않습니다. (1 <= N <= 15)
    - dominoes의 요소는 'R', 'L', '.' 세가지만 존재합니다.

    입출력 예시
    ------------------------------
    input
    ------------------------------
    case1:
        directionOfDominoes('.L.R...LR..L..')

    case2:
        directionOfDominoes('R.R.LL...LR..')
    
    ------------------------------
    output
    ------------------------------
    case1:
        'LL.RR.LLRRLL..'

    case2:
        'RRR.LLLLLLRRR'
*/

function directionOfDominoes(dominoes) {
  let foreces = Array(dominoes.length).fill(0);
  console.log(foreces);
  let force =0

  //R의 영향을 받는 요소 확인
  for(let i=0; i<dominoes.length; i++){
    if(dominoes[i]=='R') force=dominoes.length
    else if(dominoes[i]=="L") force =0;
    else force = Math.

  }

}

directionOfDominoes(".L.R...LR..L..");

// 'LL.RR.LLRRLL..'

module.exports = directionOfDominoes;
