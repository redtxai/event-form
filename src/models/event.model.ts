export type OnboardingType = 'virtual' | 'inperson'

export type CustomCircleEvent = {
  id: number
  'date-time': string
  description: string
  duration: string
  'event-name': string
  slug: string
  where: OnboardingType[]
}
