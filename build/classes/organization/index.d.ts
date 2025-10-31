import { DocumentSchema } from "../../types";
export type Organization = {
    id: string;
    iat: number;
    updatedAt: number;
    lastSubmissionAt?: number;
    submissionCount?: number;
    primaryTenantId?: string;
    owner?: string;
    members?: {
        [uid: string]: {
            uid: string;
            role?: string;
            addedAt: number;
        };
    };
    aggregatedData: Record<string, unknown>;
} & DocumentSchema;
