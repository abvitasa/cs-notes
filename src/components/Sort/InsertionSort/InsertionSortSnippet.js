import { Grid, TextareaAutosize } from '@mui/material';
import { useState } from 'react';
import SortTitle from '../../UI/Title/SortTitle';

const InsertionSortSnippet = () => {
  // eslint-disable-next-line
  const bubbleSort = () => {
    const arr = [1, 2, 3, 4];
    arr.forEach((item) => log(item));
  };

  const [result, setResult] = useState('<div>Results:</div>');
  const defaultValue = `
  const insertionSort = () => {
    const arr = [1, 2, 3, 4];
    arr.forEach(item => log(item))
  };

  insertionSort();
    `;
  const [input, setInput] = useState(defaultValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    eval(input);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const log = (arr) => {
    const answer = JSON.stringify(arr);
    setResult((prev) => prev + `<div>${answer}</div>`);
  };
  return (
    <>
      <SortTitle title={'Run Snippet'} />
      <p>
        Press <strong>Run</strong> to execute code snippet code.
      </p>
      <Grid container spacing={2} justifyContent='center'>
        <Grid item sm={12} md={6}>
          <form onSubmit={handleSubmit}>
            <TextareaAutosize
              aria-label='minimum height'
              minRows={20}
              style={{ width: '100%', maxWidth: '100%' }}
              defaultValue={input}
              onChange={handleInput}
              spellCheck='false'
            />
            <button type='submit'>Run</button>
          </form>
        </Grid>
        <Grid item sm={12} md={6}>
          <div dangerouslySetInnerHTML={{ __html: result }} />
        </Grid>
      </Grid>
    </>
  );
};

export default InsertionSortSnippet;
