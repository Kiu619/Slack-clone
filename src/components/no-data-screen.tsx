'use client'

import { useState } from 'react'

import CreateChannelDialog from '@/components/create-channel-dialog'
import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'

type NoDataScreenProps = {
  userId: string
  workspaceId: string
  workspaceName: string 
}

const NoDataScreen = ({ userId, workspaceId, workspaceName }: NoDataScreenProps) => {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <div className='w-full h-[calc(100vh-63px)] p-4'>
      <Typography
        text={`👋 Welcome to the # ${workspaceName} workspace`}
        variant='h3'
      />
      <Typography
        text='Get started by creating a channel or direct message'
        variant='p'
        className='my-3'
      />

      <div className='w-fit'>
        <Button className='w-full my-2' onClick={() => setDialogOpen(true)}>
          <Typography text='Create Channel' variant='p' />
        </Button>
      </div>

      <CreateChannelDialog
        userId={userId}
        workspaceId={workspaceId}
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
      />
    </div>
  )
}

export default NoDataScreen
