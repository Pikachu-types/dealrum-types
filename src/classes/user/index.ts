import { AuthenticationProvider, SocialLinkTypes } from "../..";
import { Model } from "../model";

export type User = {
  naming: {
    first: string;
    last: string;
  },
  email: string;
  roles: {
    founder?: boolean | null;
    investor?: boolean | null;
  },
  photoUrl: string | null | undefined;
  eid?: string;
  gptCredits?: number | null;
  slots?: number | null;
  dealroomSlots?: number | null;
  phone: string | null | undefined;
  security: {
    emailVerified: boolean;
    phoneVerified: boolean;
    authProvider: AuthenticationProvider;
  },
  bio?: {
    socials: {
      provider: SocialLinkTypes,
      link?: string
    }[],
    about?: string | null;
    miniBio?: string | null;
  } | null,
  joined: Date | null | string | number;
  lastSeen?: Date | null | string | number;
  id: string;
}

export class UserModel extends Model<User> {

  public get accountIsValid(): boolean {
    return this.data.naming.first.length > 1 && this.data.naming.last.length > 1;
  }

  public static createFullName(name: {
    first: string;
    last: string;
    middle?: string;
  }): string {
    return `${name.first}${name.middle ? ` ${name.middle}` : ''} ${name.last}`;
  }

  public get fullname(): string {
    const naming = this.data.naming;
    // Handle null/undefined input
    if (!naming) {
      return '';
    }

    // Trim whitespace and handle empty strings
    const firstName = naming.first?.trim() || '';
    const lastName = naming.last?.trim() || '';

    // If both are empty, return empty string
    if (!firstName && !lastName) {
      return '';
    }

    // If only first name exists
    if (firstName && !lastName) {
      return firstName;
    }

    // If only last name exists
    if (!firstName && lastName) {
      return lastName;
    }

    // Both names exist
    return `${firstName} ${lastName}`;
  }
}
 