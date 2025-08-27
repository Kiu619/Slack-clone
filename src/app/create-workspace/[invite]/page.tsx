import { workspaceInvite } from '@/actions/workspaces'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

const InvitePage = async ({
  params
}: {
  params: Promise<{ invite: string }>
}) => {
  const { invite: inviteCode } = await params
  await workspaceInvite(inviteCode)

  const supabase = await createClient()

  const { data } = await supabase
    .from('workspaces')
    .select('*')
    .eq('invite_code', inviteCode)
    .single()

  if (data) {
    redirect(`/workspace/${data.id}`)
  } else {
    redirect('/create-workspace')
  }
}

export default InvitePage
