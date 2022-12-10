import { PhotoCamera } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'
import React from 'react'

const UploadButton = () => {
  return (
    <div>
        <Button variant="contained" component="label" sx={{mt:"80px"}}>
  Upload
  <input hidden accept="image/*" multiple type="file" />
</Button>

    </div>
  )
}

export default UploadButton
