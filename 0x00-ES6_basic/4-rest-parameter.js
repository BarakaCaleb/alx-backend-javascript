export default function getSumOfHoods(initialNumber, ...expansions) {
    return expansions.reduce((sum, expansion) => sum + expansion, initialNumber);
  }
  