import WikiContent from '../../UI/Wiki/WikiContent';

const BubbleSortWiki = () => {
  const imgLink =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Bubblesort-edited-color.svg/1280px-Bubblesort-edited-color.svg.png';

  const wikiLink = 'https://en.wikipedia.org/wiki/Bubble_sort';
  const wikiItem = 'Bubble sort';
  const wikiInfo = (
    <span>
      , sometimes referred to as sinking sort, is a simple sorting algorithm
      that repeatedly steps through the input list element by element, comparing
      the current element with the one after it, swapping their values if
      needed. These passes through the list are repeated until no swaps had to
      be performed during a pass, meaning that the list has become fully sorted.
      The algorithm, which is a comparison sort, is named for the way the larger
      elements "bubble" up to the top of the list. This simple algorithm
      performs poorly in real world use and is used primarily as an educational
      tool. More efficient algorithms such as quicksort, timsort, or merge sort
      are used by the sorting libraries built into popular programming languages
      such as Python and Java.
    </span>
  );

  return (
    //
    <WikiContent
      imgLink={imgLink}
      wikiLink={wikiLink}
      wikiItem={wikiItem}
      wikiInfo={wikiInfo}
    />
  );
};

export default BubbleSortWiki;
