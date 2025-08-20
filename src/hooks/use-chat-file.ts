'use client'

import { useEffect, useState } from 'react'

import { createClient } from '@/utils/supabase/clients'

export const useChatFile = (filePath: string) => {
  const [publicUrl, setPublicUrl] = useState('')
  const [fileType, setFileType] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const supabase = createClient()

  useEffect(() => {
    const fetchFile = async () => {
      try {
        const {
          data: { publicUrl }
        } = supabase.storage.from('chat-files').getPublicUrl(filePath)

        if (publicUrl) {
          setPublicUrl(publicUrl)

          if (filePath.startsWith('chat/img-')) {
            setFileType('image')
          } else if (filePath.startsWith('chat/pdf-')) {
            setFileType('pdf')
          }
        }
      } catch (error) {
        setError(error as string | null)
      } finally {
        setLoading(false)
      }
    }

    if (filePath) {
      fetchFile()
    }
  }, [filePath, supabase.storage])

  return { publicUrl, fileType, loading, error }
}
