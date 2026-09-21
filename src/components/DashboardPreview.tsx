import { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Download, 
  Share2, 
  Users, 
  Clock, 
  CheckCircle, 
  Award, 
  Calculator, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  ArrowUpRight,
  Database
} from 'lucide-react';
import { 
  ENTERPRISE_METRICS, 
  DEPARTMENT_STATS, 
  SKILL_GAP_DATA, 
  RECENT_SUBMITTED_PROJECTS 
} from '../data/dashboardMock';

interface DashboardPreviewProps {
  onOpenConsultation: () => void;
}

export default function DashboardPreview({ onOpenConsultation }: DashboardPreviewProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'departments' | 'skills' | 'projects'>('overview');
  
  // Interactive ROI Calculator State
  const [roiEmployeeCount, setRoiEmployeeCount] = useState(100);
  const [roiHourlyWage, setRoiHourlyWage] = useState(35000); // 35,000 KRW avg hourly cost

  // Calculated ROI
  const weeklyHoursSaved = 6.4; // avg 6.4h saved per employee
  const annualWorkWeeks = 48;
  const totalAnnualHoursSaved = Math.round(roiEmployeeCount * weeklyHoursSaved * annualWorkWeeks);
  const totalCostSavingsWon = Math.round((totalAnnualHoursSaved * roiHourlyWage) / 100000000 * 10) / 10; // in 억 원

  return (
    <section id="dashboard-section" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold border border-blue-200">
            <BarChart3 className="w-3.5 h-3.5 text-blue-600" />
            <span>엔터프라이즈 HRD 러닝 애널리틱스</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            임원진 보고까지 완벽하게, <br />
            <span className="text-blue-600">HRD 임직원 AX 역량 분석 대시보드</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            글로벌 엔터프라이즈 기업 수준의 고도화된 실시간 학습 통계, 부서별 과제 이수율, 
            교육 전·후 스킬 갭(Skill Gap) 변화 및 ROI 산출 데이터를 실시간으로 모니터링합니다.
          </p>
        </div>

        {/* Simulated Dashboard Frame */}
        <div className="mt-10 bg-white rounded-2xl border border-slate-300 shadow-xl overflow-hidden">
          
          {/* Dashboard Top Management Bar */}
          <div className="bg-slate-900 text-white px-5 py-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-white">AX Enterprise L&D Admin Console</span>
                  <span className="text-[10px] bg-blue-600 text-white px-1.5 py-0.5 rounded font-mono">HRD Manager Mode</span>
                </div>
                <p className="text-[11px] text-slate-300">
                  고객사: <strong className="text-white">한양글로벌(주) 전사 2026 AX 트랙</strong> (총 교육생 296명)
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2 text-xs">
              <button
                onClick={() => alert('경영진 보고용 월간 AX 교육 성과 요약 리포트(PDF 18p)가 생성되었습니다.')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-blue-400" />
                <span>보고용 PDF 리포트</span>
              </button>
              <button
                onClick={() => alert('사내 포털 LMS(SCORM 2004 / xAPI) 실시간 동기화 상태: 정상')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors hidden sm:inline-flex"
              >
                <Database className="w-3.5 h-3.5 text-emerald-400" />
                <span>사내 LMS 연동: 정상</span>
              </button>
            </div>
          </div>

          {/* Sub Navigation Tabs */}
          <div className="bg-slate-100 border-b border-slate-200 px-5 flex flex-wrap gap-1">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-3 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-1.5 ${
                activeTab === 'overview'
                  ? 'border-blue-600 text-blue-600 bg-white'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>전사 성과 &amp; ROI 계산기</span>
            </button>

            <button
              onClick={() => setActiveTab('departments')}
              className={`px-4 py-3 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-1.5 ${
                activeTab === 'departments'
                  ? 'border-blue-600 text-blue-600 bg-white'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>부서별 학습 및 이수 현황</span>
            </button>

            <button
              onClick={() => setActiveTab('skills')}
              className={`px-4 py-3 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-1.5 ${
                activeTab === 'skills'
                  ? 'border-blue-600 text-blue-600 bg-white'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>교육 전·후 스킬 갭(Skill Gap)</span>
            </button>

            <button
              onClick={() => setActiveTab('projects')}
              className={`px-4 py-3 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-1.5 ${
                activeTab === 'projects'
                  ? 'border-blue-600 text-blue-600 bg-white'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>실무 산출물 &amp; 우수 과제 배포</span>
            </button>
          </div>

          {/* Tab Content Container */}
          <div className="p-6 sm:p-8">
            
            {/* TAB 1: OVERVIEW & ROI CALCULATOR */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* 4 Core Metric Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {ENTERPRISE_METRICS.map((metric, idx) => (
                    <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-700">{metric.label}</span>
                        <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                          {metric.change}
                        </span>
                      </div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                        {metric.value}
                      </div>
                      <p className="text-[11px] text-slate-700 mt-1">{metric.subtext}</p>
                    </div>
                  ))}
                </div>

                {/* Interactive ROI Calculator for HRD */}
                <div className="bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 shadow-md">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        <Calculator className="w-3.5 h-3.5" />
                        <span>HRD 교육 투자 타당성(ROI) 시뮬레이터</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold mt-1 text-white">
                        우리 회사 임직원 수 기반 연간 업무시간 절감액 계산
                      </h3>
                      <p className="text-xs text-slate-300">
                        * 수료생 1,400명 설문 및 실무 측정 데이터 기준 (주당 평균 6.4시간 절감)
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-300">연간 예상 절감 가치</span>
                      <div className="text-3xl font-black text-amber-300">
                        약 ₩{totalCostSavingsWon}억 원
                      </div>
                    </div>
                  </div>

                  {/* Sliders */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                    <div>
                      <div className="flex justify-between items-center text-xs font-bold mb-2">
                        <span>교육 대상 인원수:</span>
                        <span className="text-blue-300 text-sm font-extrabold">{roiEmployeeCount}명</span>
                      </div>
                      <input 
                        type="range" 
                        min="10" 
                        max="500" 
                        step="10"
                        value={roiEmployeeCount}
                        onChange={(e) => setRoiEmployeeCount(Number(e.target.value))}
                        className="w-full accent-blue-500 cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-slate-300 mt-1">
                        <span>10명 (파일럿)</span>
                        <span>100명 (사업부)</span>
                        <span>300명</span>
                        <span>500명 (전사)</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center text-xs font-bold mb-2">
                        <span>임직원 평균 시급(환산):</span>
                        <span className="text-blue-300 text-sm font-extrabold">{roiHourlyWage.toLocaleString()}원</span>
                      </div>
                      <input 
                        type="range" 
                        min="20000" 
                        max="80000" 
                        step="5000"
                        value={roiHourlyWage}
                        onChange={(e) => setRoiHourlyWage(Number(e.target.value))}
                        className="w-full accent-blue-500 cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-slate-300 mt-1">
                        <span>20,000원</span>
                        <span>35,000원 (표준)</span>
                        <span>50,000원</span>
                        <span>80,000원 (전문직)</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary Box */}
                  <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div>
                      <span className="text-xs text-slate-300">연간 전사 절감 시간</span>
                      <p className="text-lg font-bold text-white mt-0.5">{totalAnnualHoursSaved.toLocaleString()} 시간</p>
                    </div>
                    <div>
                      <span className="text-xs text-slate-300">인당 주간 평균 절감</span>
                      <p className="text-lg font-bold text-emerald-400 mt-0.5">6.4 시간 / 주</p>
                    </div>
                    <div>
                      <span className="text-xs text-slate-300">투자 회수 기간 (Payback)</span>
                      <p className="text-lg font-bold text-amber-300 mt-0.5">교육 수료 후 1.8개월</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: DEPARTMENT PROGRESS */}
            {activeTab === 'departments' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">부서별 AX 교육 이수율 및 과제 제출 랭킹</h4>
                    <p className="text-xs text-slate-700">전체 7개 부서 중 5개 부서가 목표 이수율(85%)을 달성했습니다.</p>
                  </div>
                  <span className="text-xs text-slate-700">기준: 최근 30일</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 text-slate-700">
                        <th className="py-3 px-4 font-bold">부서명</th>
                        <th className="py-3 px-4 font-bold text-center">수강 인원</th>
                        <th className="py-3 px-4 font-bold">이수율</th>
                        <th className="py-3 px-4 font-bold text-center">평균 학습시간</th>
                        <th className="py-3 px-4 font-bold text-center">실무 과제 제출</th>
                        <th className="py-3 px-4 font-bold text-center">역량 성장도</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {DEPARTMENT_STATS.map((dept, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-3.5 px-4 font-bold text-slate-900">
                            {dept.name}
                          </td>
                          <td className="py-3.5 px-4 text-center font-medium text-slate-700">
                            {dept.enrolled}명
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="flex items-center gap-2">
                              <div className="w-24 bg-slate-200 h-2 rounded-full overflow-hidden">
                                <div 
                                  className={`h-full rounded-full ${
                                    dept.completionRate >= 95 ? 'bg-emerald-600' :
                                    dept.completionRate >= 90 ? 'bg-blue-600' : 'bg-amber-500'
                                  }`}
                                  style={{ width: `${dept.completionRate}%` }}
                                />
                              </div>
                              <span className="font-bold text-slate-900">{dept.completionRate}%</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-4 text-center text-slate-700">
                            {dept.avgHours}시간
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold">
                              {dept.activeProjects}건 완료
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            <span className="text-emerald-700 font-bold flex items-center justify-center gap-0.5">
                              <TrendingUp className="w-3.5 h-3.5" /> +{dept.skillGrowth}%
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 3: SKILL GAP & BEFORE/AFTER */}
            {activeTab === 'skills' && (
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">교육 전 vs 교육 후 임직원 AX 역량 변화 (Skill Gap 진단)</h4>
                  <p className="text-xs text-slate-700 mt-0.5">
                    사전·사후 평가 테스트 및 실기 과제 점수 분석 결과 (100점 만점 기준)
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {SKILL_GAP_DATA.map((skill, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-slate-900">{skill.category}</span>
                        <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                          +{skill.after - skill.before}점 향상
                        </span>
                      </div>

                      <div className="space-y-1.5 text-[11px] text-slate-700">
                        {/* Before Bar */}
                        <div className="flex items-center gap-2">
                          <span className="w-16 shrink-0 text-slate-700">교육 전:</span>
                          <div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden">
                            <div className="bg-slate-600 h-full rounded-full" style={{ width: `${skill.before}%` }} />
                          </div>
                          <span className="w-8 text-right font-mono">{skill.before}점</span>
                        </div>

                        {/* After Bar */}
                        <div className="flex items-center gap-2">
                          <span className="w-16 shrink-0 font-bold text-blue-700">교육 후:</span>
                          <div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden">
                            <div className="bg-blue-600 h-full rounded-full" style={{ width: `${skill.after}%` }} />
                          </div>
                          <span className="w-8 text-right font-mono font-bold text-blue-700">{skill.after}점</span>
                        </div>

                        {/* Industry Benchmark */}
                        <div className="flex items-center gap-2 text-[10px] text-slate-700">
                          <span className="w-16 shrink-0">산업 벤치마크:</span>
                          <span className="font-mono">{skill.benchmark}점 (상위 15% 초과 달성)</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: SUBMITTED PROJECTS */}
            {activeTab === 'projects' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">실무 워크숍 도출 프로젝트 &amp; 사내 배포 현황</h4>
                    <p className="text-xs text-slate-700">임직원들이 직접 기획하고 코칭을 거쳐 실제 사내 업무에 배포된 대표 과제입니다.</p>
                  </div>
                  <span className="text-xs font-bold text-blue-600">총 78개 프로젝트 진행 중</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {RECENT_SUBMITTED_PROJECTS.map((proj) => (
                    <div key={proj.id} className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                          {proj.dept}
                        </span>
                        <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          {proj.status}
                        </span>
                      </div>
                      <h5 className="font-bold text-slate-900 text-sm leading-snug">
                        {proj.title}
                      </h5>
                      <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-xs space-y-1">
                        <div className="text-slate-700">
                          <span className="font-semibold text-slate-900">비즈니스 임팩트:</span> {proj.impact}
                        </div>
                        <div className="text-blue-700 font-semibold">
                          <span>심사 피드백:</span> {proj.evaluatorScore}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Dashboard Bottom CTA Bar */}
          <div className="bg-slate-100/90 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-700">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>사내 LMS(SAP SuccessFactors, Cornerstone, 원티드스페이스 등) 연동 지원</span>
            </div>
            <button
              id="dashboard-cta-consult"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-sm"
            >
              <span>우리 기업용 대시보드 도입 상담하기</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
