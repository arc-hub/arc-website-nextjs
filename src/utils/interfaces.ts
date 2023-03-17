export interface IsJob {
  id: number
  company_id: number
  job_title: string
  job_level: string
  company_name: string
  company_logo: string
  job_country: string
  job_city: string
  contract_type: string
  employment_type: string
  openings: string
  job_description: string
  salary_range: string
  application_deadline: string
  receive_updates: string | null
  created_at: string
  keyword?: string
}

export interface IsClient {
  avatar: any
  name: string
  rating: number
  comment: string
  position: string
}

export interface IsSefFormikValues {
  first_name: string
  last_name: string
  email: string
  github: string
  experience: string
  commitment_level: string
  course: string
  phone: string
  skills: string[]
  about_yourself: string
  expectations_post_training: string
  motivation: string
  staying_motivated: string
  expectations_during_training: string
  computer_access: string
  hear_about_programme: string
  receive_communication: boolean
}

export interface ISelpFormikValues {
  first_name: string
  last_name: string
  email: string
  github: string
  experience: string
  commitment_level: string
  course: string
  phone: string
  stacks: string[]
  expectations_post_training: string
  about_yourself: string
  motivation: string
  staying_motivated: string
  expectations_during_training: string
  computer_access: string
  hear_about_programme: string
  funding: string
  payment_period: string
  payment_option: string
  receive_communication: boolean
}
