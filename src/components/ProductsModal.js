import React from 'react'
import { Modal, Paper, Typography } from '@mui/material'

const ProductsModal = ({isOpen, setIsOpen}) => {
  return (
    <Modal
          open={isOpen}
          onClose={()=>setIsOpen(false)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Paper style={{ width:400,height:300,padding: '20px' }} 
          
          
          >
            <Typography variant="h6">Hover Modal</Typography>
            <p>This modal appears when you hover over the button.</p>
          </Paper>
        </Modal>
  )
}

export default ProductsModal