import { DocumentSchema } from "../..";
export type FunnelSubmissionStatus = 'draft' | 'submitted' | 'reviewing' | 'accepted' | 'rejected' | 'withdrawn';
export type FunnelSubmission = {
    id: string;
    iat: number;
    updatedAt?: number;
    tenantId: string;
    organizationId: string;
    funnelConfigId: string;
    submittedDataSnapshot?: Record<string, any>;
    status: FunnelSubmissionStatus;
    submittedBy?: {
        uid?: string;
        name?: string;
        isAuthenticated: boolean;
    };
    reviewedBy?: string;
    reviewedAt?: number;
    reviewNotes?: string;
    tags?: string[];
    stage?: string;
    internalNotes?: string;
    files?: Array<{
        fieldName: string;
        url: string;
        type: 'image' | 'pdf';
        uploadedAt: number;
    }>;
} & DocumentSchema;
