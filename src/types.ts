export type TrainingFormat = 'online' | 'offline' | 'hybrid' | 'consulting';

export type JobDepartment = 
  | 'all'
  | 'planning'
  | 'marketing'
  | 'hr'
  | 'finance'
  | 'it_dev'
  | 'rnd'
  | 'cx_cs'
  | 'executive';

export type AiMaturityLevel = 'beginner' | 'intermediate' | 'advanced' | 'enterprise_agent';

export interface CurriculumItem {
  id: string;
  title: string;
  subtitle: string;
  department: JobDepartment;
  targetAudience: string;
  format: TrainingFormat;
  duration: string;
  level: AiMaturityLevel;
  tag: string;
  highlights: string[];
  tools: string[];
  expectedOutput: string;
  onlineHours?: number;
  offlineHours?: number;
  isPopular?: boolean;
  satisfactionScore: number;
  completionRate: number;
  modules: {
    title: string;
    description: string;
    hours: number;
    topics: string[];
  }[];
}

export interface WorkshopItem {
  id: string;
  title: string;
  subtitle: string;
  department: JobDepartment;
  category: string;
  targetAudience: string;
  duration: string;
  recommendedSize: string;
  format: '오프라인 실습' | '온·오프라인 융합' | '사내 해커톤';
  keyTools: string[];
  handsOnRatio: number; // e.g. 80 means 80% practical hands-on
  deliverables: string[];
  detailedSyllabus: {
    session: string;
    title: string;
    duration: string;
    content: string;
    exercise: string;
  }[];
  instructorProfile: {
    name: string;
    role: string;
    companyCareer: string;
  };
  caseStudy: string;
}

export interface EnterpriseMetric {
  label: string;
  value: string;
  subtext: string;
  change: string;
}

export interface DepartmentProgress {
  name: string;
  department: JobDepartment;
  enrolled: number;
  completionRate: number;
  avgHours: number;
  activeProjects: number;
  skillGrowth: number; // percentage
}

export interface ConsultationFormData {
  companyName: string;
  contactName: string;
  jobTitle: string;
  email: string;
  phone: string;
  targetDepartment: string;
  employeeCount: string;
  preferredFormat: string;
  budgetRange: string;
  inquiryDetails: string;
  selectedCurriculums: string[];
}
