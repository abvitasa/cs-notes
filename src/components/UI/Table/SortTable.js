import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { projData } from '../../../ProjData';

const SortTable = ({ sortType }) => {
  const bestTime = projData[sortType].bestTime;
  const averageTime = projData[sortType].averageTime;
  const worstTime = projData[sortType].worstTime;
  const worstSpace = projData[sortType].worstSpace;

  return (
    <Paper className='table' sx={{ my: 2 }}>
      <Table sx={{ minWidth: 340 }}>
        <TableHead>
          <TableRow>
            <TableCell colSpan={9} align='center'>
              Time Complexity
            </TableCell>
            <TableCell colSpan={3} align='center'>
              Space Complexity
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3} align='center'>
              Best
            </TableCell>
            <TableCell colSpan={3} align='center'>
              Average
            </TableCell>
            <TableCell colSpan={3} align='center'>
              Worst
            </TableCell>
            <TableCell colSpan={3} align='center'>
              Worst
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell colSpan={3} align='center'>
              <span dangerouslySetInnerHTML={{ __html: bestTime }} />
            </TableCell>
            <TableCell colSpan={3} align='center'>
              <span dangerouslySetInnerHTML={{ __html: averageTime }} />
            </TableCell>
            <TableCell colSpan={3} align='center'>
              <span dangerouslySetInnerHTML={{ __html: worstTime }} />
            </TableCell>
            <TableCell colSpan={3} align='center'>
              <span dangerouslySetInnerHTML={{ __html: worstSpace }} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};

export default SortTable;
