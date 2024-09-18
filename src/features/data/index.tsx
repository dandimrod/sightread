'use client'

import { parseMidi } from '@/features/parsers'
import { getUploadedSong } from '@/features/persist'
import { Song, SongSource, SongMetadata } from '@/types'
import useSWR, { type SWRResponse } from 'swr'
const songManifest = require('@/manifest.json')
const map: Map<string, SongMetadata> = new Map(songManifest.map((s: SongMetadata) => [s.id, s]))

function handleSong(response: Response): Promise<Song> {
  return response.arrayBuffer().then(parseMidi)
}

function getSongUrl(id: string, source: SongSource) {
  if(source === 'midishare') {
    return `https://assets.midishare.dev/scores/${id}/${id}.mid`
  }
  const path = map.get(id)?.file
  if (!path) {
    throw new Error('Song '+id+' not found')
  }
  return '/'+path;
}

function getBase64Song(data: string): Song {
  const binaryMidi = Buffer.from(decodeURIComponent(data), 'base64')
  return parseMidi(binaryMidi.buffer)
}

function fetchSong(id: string, source: SongSource): Promise<Song> {
  switch (source) {
    case 'midishare':
    case 'builtin':
      const url = getSongUrl(id, source)
      return fetch(url).then(handleSong)
    case 'base64':
      return Promise.resolve(getBase64Song(id))
    case 'upload':
      return Promise.resolve(getUploadedSong(id)).then((res) =>
        res === null ? Promise.reject(new Error('Could not find song')) : res,
      )
    case 'url':
      return fetch(id).then(handleSong)
    default:
      return Promise.reject(new Error(`Could not get song for ${id}, ${source}`))
  }
}

export function useSong(id: string, source: SongSource): SWRResponse<Song, any, any> {
  return useSWR([id, source], ([id, source]) => fetchSong(id, source))
}
