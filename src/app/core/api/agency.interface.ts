export type AgencyRange = 'Orbital' | 'Interplanetary' | 'Interstellar';
export type AgencyStatus = 'Active' | 'Pending';
export interface Agency {
  id: string;
  name: string;
  range: AgencyRange;
  status: AgencyStatus;
}
