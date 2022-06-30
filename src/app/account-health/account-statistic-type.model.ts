export class AccountStatisticTypeModel {
  constructor(public id: StatisticType,
              public title: string,
              public value: number,
              public description: string,
              public helpGuideUrl: string = '',
              public icon: string = 'warning',
              public caption: string = '') {

  }
}

export enum StatisticType {
  RESERVATION_WARNINGS,
  SERVICES_WITHOUT_SUB_ACCOUNTS,
  FOLIOS_WITHOUT_PSP,
  RESERVATION_CHECKED_OUT_OPEN_BALANCE,
  RESERVATION_CANCELED_WITHOUT_FEE,
  FOLIOS_WITH_UNUSUAL_PAYMENTS,
  FOLIOS_WITH_MANUAL_CHARGES,
}
