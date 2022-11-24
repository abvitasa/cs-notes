import WikiContent from '../../UI/Wiki/WikiContent';

const InsertionSortWiki = () => {
  const imgLink =
    'https://upload.wikimedia.org/wikipedia/commons/4/42/Insertion_sort.gif';
  const wikiLink = 'https://en.wikipedia.org/wiki/Insertion_sort';
  const wikiItem = 'Insertion sort ';
  const wikiInfo = (
    <span>
      is a simple sorting algorithm that builds the final sorted array (or list)
      one item at a time by comparisons. It is much less efficient on large
      lists than more advanced algorithms such as quicksort, heapsort, or merge
      sort. Insertion sort iterates, consuming one input element each
      repetition, and grows a sorted output list. At each iteration, insertion
      sort removes one element from the input data, finds the location it
      belongs within the sorted list, and inserts it there. It repeats until no
      input elements remain. Sorting is typically done in-place, by iterating up
      the array, growing the sorted list behind it. At each array-position, it
      checks the value there against the largest value in the sorted list (which
      happens to be next to it, in the previous array-position checked). If
      larger, it leaves the element in place and moves to the next. If smaller,
      it finds the correct position within the sorted list, shifts all the
      larger values up to make a space, and inserts into that correct position.
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

export default InsertionSortWiki;
