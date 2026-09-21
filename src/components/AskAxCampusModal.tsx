import { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  ArrowRight, 
  Building2, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface AskAxCampusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: (topic?: string) => void;
}

interface Message {
  role: 'assistant' | 'user';
  content: string;
}

export default function AskAxCampusModal({
  isOpen,
  onClose,
  onOpenConsultation
}: AskAxCampusModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '안녕하세요! AX Campus for Business AI 어시스턴트입니다. 기업 교육 커리큘럼 추천, 실무 워크숍 구성, 고용보험 환급, 사내 데이터 보안 등 궁금한 점을 무엇이든 물어보세요.'
    }
  ]);
  const [inputQuestion, setInputQuestion] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  if (!isOpen) return null;

  const quickQuestions = [
    '전사 임직원 100명 맞춤형 AX 교육 커리큘럼 추천해줘',
    '사내 망분리/보안 환경에서 비공개 AI 실습이 가능한가요?',
    '고용보험 환급 및 정부 AX 바우처 지원 연계 절차는?',
    '실습 85% 워크숍의 산출물(업무 봇, 자동화)은 무엇인가요?'
  ];

  const handleSend = (text?: string) => {
    const query = text || inputQuestion;
    if (!query.trim()) return;

    const userMsg: Message = { role: 'user', content: query };
    setMessages(prev => [...prev, userMsg]);
    setInputQuestion('');
    setIsTyping(true);

    // Provide intelligent contextual answer
    setTimeout(() => {
      let reply = '';
      if (query.includes('100명') || query.includes('전사') || query.includes('추천')) {
        reply = '100인 이상 전사 규모의 경우, [기본 리터러시 온라인 마이크로러닝(6시간)]으로 전 직원의 프롬프트 기본기를 맞추고, [직무별 2일 집중 오프라인 워크숍(10시간)]을 결합한 하이브리드 트랙을 가장 추천합니다. 기획/마케팅/HR 직무별 템플릿과 사내 보안 가이드라인이 함께 배포됩니다.';
      } else if (query.includes('보안') || query.includes('망분리')) {
        reply = '네, 완벽히 지원됩니다. AX Campus는 사내 기밀 유출 방지를 위한 Private LLM 샌드박스 실습 환경과 철저한 기업 기밀 비유출(Zero-Data Retention) 계약(NDA)을 표준 준수합니다. 기업 고객 전용 보안 테넌트를 제공합니다.';
      } else if (query.includes('환급') || query.includes('바우처') || query.includes('비용')) {
        reply = '본 교육 과정은 고용노동부 사업주 직업능력개발훈련(고용보험 환급) 및 중기부/과기부 AI 바우처 사업 연계가 가능하여 최대 50~80% 비용 지원 혜택을 받으실 수 있습니다. 상담 신청 시 담당 HRD 컨설턴트가 환급 요건 사전 진단을 대행해 드립니다.';
      } else if (query.includes('워크숍') || query.includes('산출물') || query.includes('85%')) {
        reply = '실습 85% 워크숍에서는 단순 이론이 아닌 [사내 업무 자동화 Custom Agent 챗봇], [직무별 표준 프롬프트북], [임원 보고서 자동화 파이프라인] 등 현업에 바로 배포 가능한 실질적 산출물을 직접 제작하고 데모데이에서 검증받게 됩니다.';
      } else {
        reply = `문의해주신 "${query}"와 관련하여, 기업의 업종(제조, 금융, IT, 서비스)과 임직원 디지털 숙련도에 따라 1:1 맞춤형 커리큘럼을 무상으로 구성해 드립니다. 전문 HRD 컨설턴트와의 상담을 신청하시면 상세 제안서를 받아보실 수 있습니다.`;
      }

      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
      >
        {/* Modal Header */}
        <div className="bg-[#0056D2] px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-base flex items-center gap-1.5">
                <span>AX Campus에 질문하기</span>
                <span className="text-[10px] bg-white/20 px-1.5 py-0.2 rounded font-mono">AI HRD</span>
              </h3>
              <p className="text-xs text-blue-100">기업 교육, 커리큘럼, 견적, 보안 실시간 안내</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat History */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-3.5 flex-1 bg-slate-50 min-h-[280px]">
          {messages.map((msg, i) => (
            <div 
              key={i} 
              className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'assistant' && (
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-1">
                  <Bot className="w-4 h-4" />
                </div>
              )}
              <div 
                className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-[#0056D2] text-white rounded-br-xs shadow-xs' 
                    : 'bg-white text-slate-800 border border-slate-200 rounded-tl-xs shadow-xs'
                }`}
              >
                {msg.content}
              </div>
              {msg.role === 'user' && (
                <div className="w-7 h-7 rounded-full bg-slate-700 text-white flex items-center justify-center shrink-0 mt-1">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-2.5 items-center text-xs text-slate-700">
              <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-white px-3.5 py-2 rounded-2xl border border-slate-200 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          )}
        </div>

        {/* Quick Question Chips */}
        <div className="px-4 py-2.5 bg-white border-t border-slate-100 flex flex-wrap gap-1.5">
          {quickQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="text-[11px] font-medium bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 px-2.5 py-1 rounded-full transition-colors text-left"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-white border-t border-slate-200 flex items-center gap-2">
          <input
            type="text"
            value={inputQuestion}
            onChange={(e) => setInputQuestion(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="기업 교육 관련 궁금한 점을 입력하세요..."
            className="flex-1 px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0056D2]"
          />
          <button
            onClick={() => handleSend()}
            disabled={!inputQuestion.trim()}
            className="px-3 py-2 bg-[#0056D2] hover:bg-blue-700 disabled:bg-slate-300 text-white rounded-xl transition-colors shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

        {/* Footer CTA */}
        <div className="px-4 py-2.5 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs">
          <span className="text-slate-600">더 자세한 맞춤 설계가 필요하신가요?</span>
          <button
            onClick={() => {
              onClose();
              onOpenConsultation('AX Campus 질문하기 연계 상담');
            }}
            className="font-bold text-[#0056D2] hover:underline flex items-center gap-1"
          >
            <span>상담 신청하기</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
