import React from "react";
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { TreeItem, TreeView } from '@mui/lab';
import { ReactComponent as ExpandMoreIcon } from '../../../../assets/img/admin/expand.svg';
import { ReactComponent as CollapseIcon } from '../../../../assets/img/admin/collapse.svg';
import { sidebar } from '../../../../assets/config';
import './style.css';

const useTreeItemStyles = makeStyles(() => ({
  root: {
    height: 216,
    flexGrow: 1,
    width: 250
  },
  content: {
    flexDirection: "row-reverse",
    height: 48,
    padding: '0px 12px',
    '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
      backgroundColor: 'rgba(85, 66, 246, 0.1)',
    },
    '&.MuiTreeItem-label': {
      paddingLeft: 0,
    },
    width: 226,
    backgroundColor: '#FBFAFC',
    '&.MuiCollapse-root':{
      paddingLeft: 0,
      marginLeft: 0,
    }
  },
  childContent: {
    padding: 0,
    height: 48,
    '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
      backgroundColor: 'rgba(85, 66, 246, 0.1)',
    },
    '& .MuiTreeItem-label': {
      paddingLeft: 0,
    },
    '& .MuiTreeItem-iconContainer':{
      display: 'none',
    }
  },
  labelRoot: {
    display: "flex",
    alignItems: "center",
    margin: 0,
    padding: 12,
  },
  labelIcon: {
    marginRight: 6,
  },
  labelText: {
    fontWeight: "inherit",
    flexGrow: 1
  }
}));

function StyledTreeItem(props) {
  const classes = useTreeItemStyles();
  const { labelText, labelIcon: LabelIcon, ...other } = props;

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          {LabelIcon && <LabelIcon color="action" className={classes.labelIcon} />}
          
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
        </div>
      }
      classes={{
        content: classes.content,
      }}
      {...other}
    />
  );
}


function StyledChildTreeItem(props) {
  const classes = useTreeItemStyles();
  const { labelText, labelIcon: LabelIcon, ...other } = props;

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          {LabelIcon && <LabelIcon color="action" className={classes.labelIcon} />}
          
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
        </div>
      }
      classes={{
        content: classes.childContent
      }}
      {...other}
    />
  );
}



export default function LeftSideBar() {
  const classes = useTreeItemStyles();
  const [expanded, setExpanded] = React.useState([]);

  const handleChange = (event, nodes) => {
    setExpanded(nodes);
  };

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<CollapseIcon />}
      defaultExpandIcon={<ExpandMoreIcon />}
      expanded={expanded}
      onNodeToggle={handleChange}
    >
      {sidebar.map((item, idx) => {
        return (
          <React.Fragment key={idx}>
            {idx === 1?(
              <StyledTreeItem nodeId={(idx + 1).toString()} labelText={item.label} labelIcon={item.icon}>
                <StyledChildTreeItem
                  nodeId={(sidebar.length + 1).toString()}
                  labelText="All Products"
                />
                <StyledChildTreeItem
                  nodeId={(sidebar.length + 2).toString()}
                  labelText="Tag Management"
                />
              </StyledTreeItem>
            ):<StyledTreeItem nodeId={(idx + 1).toString()} labelText={item.label} labelIcon={item.icon} key={idx}/>}
          </React.Fragment>
          
        )
      })}
    </TreeView>
  );
}
