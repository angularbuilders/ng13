export type TripStatus = 'Waiting' | 'Confirmed';
export type TripKind = 'TripOnly' | 'WithStay';
export interface Trip {
  id: string;
  agencyId: string;
  agencyTripCode?: string;
  destination: string;
  places: number;
  startDate: string;
  endDate: string;
  flightPrice: number;
  stayingNightPrice?: number;
  kind?: TripKind;
  status: TripStatus;
  extraLuggagePricePerKilo?: number;
  premiumFoodPrice?: number;
}
