
import seedrandom from 'seedrandom'



function shuffleArray(seed, array) {
  const arrayCopy = [...array]
  const rng = seedrandom(seed)
    for (var i = arrayCopy.length - 1; i > 0; i--) {
        var j = Math.floor(rng() * (i + 1));
        var temp = arrayCopy[i];
        arrayCopy[i] = arrayCopy[j];
        arrayCopy[j] = temp;
    }
    return arrayCopy;
}

const scoreInRound = (round) => {
  round
    .map(({value}) => value)
    .reduce((a,b) => a+b)d.map(({value}) => {  })
}


function genDraw(formations, seed, rounds, minPointsPerRound) {
  shuffleArray(seed, formations).reduce((drawSoFar, nextFormation) => {
    if (drawSoFar.empty) {
      return [[nextFormation]]
    }
    const lastRound = drawSoFar[drawSoFar.length -1]
    const scoreSoFar = scoreInRound(lastRound)

    if (scoreSoFar < minPointsPerRound) {
      [...drawSoFar.slice(0,-1), [...lastRound, nextFormation]]
    } else {
      [...drawSoFar, [nextFormation]]
    }


  }, [])
)


}

export default genDraw
