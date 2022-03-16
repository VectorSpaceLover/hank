import React from "react";
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { TreeItem, TreeView } from '@mui/lab';
import { ReactComponent as ExpandMoreIcon } from '../../../../assets/img/admin/expand.svg';
import { ReactComponent as CollapseIcon } from '../../../../assets/img/admin/collapse.svg';
import { sidebar } from '../../../../assets/config';

const useTreeItemStyles = makeStyles(() => ({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 230
  },
  content: {
    flexDirection: "row-reverse"
  },
  labelRoot: {
    display: "flex",
    alignItems: "center",
    padding: 10,
  },
  labelIcon: {
    marginRight: 10,
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
        content: classes.content
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
          <>
            {idx === 1?(
              <StyledTreeItem nodeId={idx + 1} labelText={item.label} labelIcon={item.icon}>
                <StyledTreeItem
                  nodeId={sidebar.length}
                  labelText="All Products"
                />
                <StyledTreeItem
                  nodeId={sidebar.length + 1}
                  labelText="Tag Management"
                />
              </StyledTreeItem>
            ):<StyledTreeItem nodeId={idx + 1} labelText={item.label} labelIcon={item.icon} />}
          </>
          
        )
      })}
    </TreeView>
  );
}
