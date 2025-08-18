import { getUserData } from '@/actions/get-user-data'
import { getCurrentWorksaceData, getUserWorkspaceData } from '@/actions/workspaces'
import Sidebar from '@/components/sidebar'
import { redirect } from 'next/navigation'

import { Workspace as UserWorkspace } from '@/types/app'

interface WorkspacePageProps {
  params: Promise<{ workspaceId: string }>
}
export default async function WorkspacePage({ params }: WorkspacePageProps) {
  const { workspaceId } = await params

  const userData = await getUserData()
  if (!userData) return redirect('/auth')

  const [userWorkspaceData] = await getUserWorkspaceData(userData.workspaces!);

  const [currentWorkspaceData] = await getCurrentWorksaceData(workspaceId);

  // const userWorkspaceChannels = await getUserWorkspaceChannels(
  //   currentWorkspaceData.id,
  //   userData.id
  // );


  return (
    <>
      <div className='hidden md:block'>
        <Sidebar
          currentWorkspaceData={currentWorkspaceData}
          userData={userData}
          userWorksapcesData={userWorkspaceData as UserWorkspace[]}
        />
        {/* <InfoSection
          currentWorkspaceData={currentWorkspaceData}
          userData={userData}
          userWorkspaceChannels={userWorkspaceChannels}
          currentChannelId=''
        />

        <NoDataScreen
          userId={userData.id}
          workspaceId={currentWorkspaceData.id}
          workspaceName={currentWorkspaceData.name}
        /> */}
      </div>
      <div className='md:hidden block min-h-screen'>Mobile</div>
    </>
  )
}
