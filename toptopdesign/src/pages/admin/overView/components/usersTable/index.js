import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import ViewAllButton from '../viewAll';
import IconButton from '@mui/material/IconButton';
import {ReactComponent as DisableIcon} from '../../../../../assets/img/admin/disable.svg';
import {ReactComponent as MailIcon} from '../../../../../assets/img/admin/mail.svg';
import {ReactComponent as PersonAddIcon} from '../../../../../assets/img/admin/person_add.svg';
import {ReactComponent as ArrowIcon} from '../../../../../assets/img/admin/arrow.svg';
import Button from '@mui/material/Button';
import { withStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 32,
    },
    user: {
        display: 'flex',
        alignItems: 'center',
        width: 157,
        paddingLeft: 8,
    },
    userName: {
        color: 'var(--charade)',
        fontFamily: 'var(--font-family-manrope-semi-bold)',
        fontSize: 'var(--font-size-14)',
    },
    userInfo: {
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: 8,
    },
    customerId: {
      color: 'var(--txt-gray)',
      fontFamily: 'var(--font-family-manrope-medium)',
      fontSize: 'var(--font-size-12)',
    },
    header: {
        display: 'flex',
        padding: '22px 26px 36px 24px'
    },
    tableName: {
        fontFamily: 'var(--font-family-manrope-semi-bold)',
        fontSize: 'var(--font-size-16)',
    },
    actionGroup: {
      display: 'flex',
    },
    iconBtn: {
      padding: 5,
    },
    footer: {
      marginTop: 32,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderTop: '1px solid #EBEAED',
      paddingTop: 16,
    }
}))


const ViewMore = withStyles((theme) => ({
  root: {
      color: `var(--txt-gray) !important`,
      fontFamily: `var(--font-family-manrope) !important`,
      fontSize: `var(--font-size-13) !important`,
      fontWeight: '400px !important',
      fontStyle: 'normal !important',
      height: '32px !important',
      marginBottom: '0.78px !important',
      display: 'flex !important',
      padding: '0px 15.5px !important',
      justifyContent: 'flex-end !important',
      alignItems: 'center !important',
      borderRadius: '64px !important',
      cursor: 'pointer !important',
      '&:hover': {
          opacity: '.7 !important',
      },
      '& .sign-in-arrow': {
          width: '16px !important',
          height: '16px !important',
          marginLeft: '8px !important',
          marginTop: '0px !important',
      },
      '& .sign-in-txt': {
          display: 'flex !important',
          paddingTop: '1px !important',
          alignItems: 'center !important',
      }
  },
}))(Button);

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'var(--white)',
    color: 'var(--txt-gray)',
    fontFamily: 'var(--font-family-manrope-medium)',
    fontSize: 'var(--font-size-12)',
    height: 18,
    paddingBottom: 10,
  },
  '&': {
    height: 36,
    padding: '0px 24px 24px 24px',
    border: 'none'
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&': {
    backgroundColor: 'white',
    
  },
  
}));

const rows = [
    {name: 'Frozen yoghurt', imagePath: '/img/avatars/1.png', id: 159},
    {name: 'Frozen yoghurt', imagePath: '/img/avatars/2.png', id: 159},
    {name: 'Frozen yoghurt', imagePath: '/img/avatars/3.png', id: 159},
    {name: 'Frozen yoghurt', imagePath: '/img/avatars/4.png', id: 159},
    {name: 'Frozen yoghurt', imagePath: '/img/avatars/5.png', id: 159},
];

export default function UsersTable() {
    const classes = useStyles();
  return (
    <TableContainer 
      component={Paper} 
      style = {{ 
        width: 359, 
        height: 476, 
        overFlowY: 'auto',
        marginTop: 24, 
        marginRight: 22,
        boxShadow: 'none',
      }}>
      <div className={classes.header}>
          <div className={classes.tableName}>New Users</div>
          <ViewAllButton text={"View All"}/>
      </div>    
      <Table aria-label="customized table">
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                  <div className={classes.user}>
                    <img className={classes.avatar} src={row.imagePath} alt=''/>
                    <div className={classes.userInfo}>
                      <div className={classes.userName}>
                        {row.name}
                      </div>
                      <div className={classes.customerId}>
                        {`Customer ID#${row.id}`}
                      </div>
                    </div>
                  </div>
              </StyledTableCell>
              <StyledTableCell align="right">
                <div className={classes.actionGroup}>
                  <IconButton 
                      aria-label="delete"
                      className={`${classes.iconBtn}`}
                  >
                      <DisableIcon />
                  </IconButton>
                  <IconButton 
                      aria-label="delete"
                      className={`${classes.iconBtn}`}
                  >
                      <MailIcon />
                  </IconButton>
                  <IconButton 
                      aria-label="delete"
                      className={`${classes.iconBtn}`}
                  >
                      <PersonAddIcon />
                  </IconButton>
                </div>  
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.footer}>
        <ViewMore>
          <div className='.sign-in-txt'>View More Customers</div>
          <ArrowIcon className='sign-in-arrow'/>
        </ViewMore>
      </div>
      
    </TableContainer>
  );
}
