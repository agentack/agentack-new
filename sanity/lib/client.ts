import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

const isConfigured = Boolean(projectId && dataset)

async function performFetch<T = any>(
  query: string,
  params?: Record<string, unknown>,
): Promise<T | null> {
  if (!isConfigured) {
    console.warn(
      'Sanity is not configured (NEXT_PUBLIC_SANITY_PROJECT_ID / NEXT_PUBLIC_SANITY_DATASET missing). Skipping query.',
    )
    return null
  }

  try {
    const sanityClient = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
    return await sanityClient.fetch<T>(query, params as any)
  } catch (err) {
    console.error('Sanity fetch failed:', err)
    return null
  }
}

export const client = {
  fetch: performFetch,
}
