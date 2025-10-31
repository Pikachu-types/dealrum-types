import { DocumentSchema } from "../../types"

export type Organization = {
  id: string
  iat: number
  updatedAt: number

  // Controlled fields only
  lastSubmissionAt?: number
  submissionCount?: number
  primaryTenantId?: string

  owner?: string;

  // Team members (if authenticated)
  members?: {
    [uid: string]: {
      uid: string
      role?: string
      addedAt: number
    }
  }

  // All funnel data - single source of truth
  aggregatedData: Record<string, unknown>
} & DocumentSchema;

