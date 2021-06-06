import React, { useState } from 'react'
import { Table, TableHead, TableRow, TableCell, makeStyles, TablePagination, TableSortLabel } from '@material-ui/core'



export default function useTable(placeholder, headCells) {

    
    const TblContainer = props => (
        <Table>
            {props.children}
        </Table>

    )

    const TblHead = props => {

        return(<TableHead>
            <TableRow>
                {
                    headCells.map(headCell => (<TableCell key={headCell.id}>
                        {headCell.label}
                    </TableCell>))
                }

            </TableRow>
        </TableHead>)
    }


    return {
        TblContainer,
        TblHead
    }
}