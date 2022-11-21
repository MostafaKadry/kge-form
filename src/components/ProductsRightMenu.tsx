import React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import Link from '@mui/material/Link';
const  ProductsRightMenu = () => {
  return (
     <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ flexGrow: 1, maxWidth: '100%', overflowY: 'auto' }}
    >
      <TreeItem nodeId="1" label="PRODUCTS">
        <TreeItem nodeId="2" label={(<a className="dropdown-item" href="/Product/CheapClass3Dsc">Class 3 Dsc</a>)} />
      <TreeItem nodeId="5" label={(<a className="dropdown-item" href="/Product/CheapDgft">DGFT</a>)} />
        <TreeItem nodeId="10" label={(<a className="dropdown-item" href="/Product/CheapUsbToken">USB Auto Token</a>)} />
        	
											
      </TreeItem>
    </TreeView>
  )
}


export default ProductsRightMenu;