import { AccessPermission, AuthenticationProvider, DocumentSchema, MemberStatus } from "../..";
import { Model } from "../model";
import { User } from "../user";

export type TeamMember = {
  first: string;
  last: string;
  email: string;
  inviter: {
    name: string,
    email: string,
    company: string,
  } | null
  linkedUserUid?: string | null | undefined;
  nin: string | null | undefined;
  photo: string | null | undefined;
  mobile: string | null | undefined;
  linkedin: string | null | undefined;
  experience: string | null | undefined;
  role: string;
  provider: AuthenticationProvider;
  include: boolean;
  contactPerson: boolean | null;
  default?: boolean | null;
  access: AccessPermission;
  invite: boolean;
  status: MemberStatus;
  founder: boolean;
  addedBy: string;
  joinedAt?: Date | null | string | number;
} & DocumentSchema;

export type CompoundedUser = TeamMember & { user?: User };


export class TeamMemberModel extends Model<TeamMember> {
}