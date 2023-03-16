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
