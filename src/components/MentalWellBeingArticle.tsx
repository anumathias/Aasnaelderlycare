import { useNavigate } from "react-router";
import BottomNavBar from "./BottomNavBar";

export default function MentalWellBeingArticle() {
  const navigate = useNavigate();

  return (
    <div className="bg-white relative w-full min-h-screen max-w-[393px] mx-auto flex flex-col">
      {/* Scrollable Content */}
      <div 
        className="flex-1 overflow-y-auto pb-[120px]" 
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#1F75BE #f1f1f1'
        }}
      >
        <style>{`
          .overflow-y-auto::-webkit-scrollbar {
            width: 6px;
          }
          .overflow-y-auto::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
          }
          .overflow-y-auto::-webkit-scrollbar-thumb {
            background: #1F75BE;
            border-radius: 10px;
          }
          .overflow-y-auto::-webkit-scrollbar-thumb:hover {
            background: #1a64a3;
          }
        `}</style>

        <div className="px-[16px] pt-[16px] pb-[16px]">
          {/* Back Button and Title */}
          <div className="flex items-center gap-[12px] mb-[20px]">
            <button 
              onClick={() => navigate("/mental-wellbeing")}
              className="flex items-center justify-center size-[40px] rounded-full hover:bg-[#1F75BE]/10 transition-all active:scale-95 border border-gray-200 hover:border-[#1F75BE]"
            >
              <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="#1F75BE" />
              </svg>
            </button>
            <p className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#1F75BE] leading-tight">Mental Well-Being</p>
          </div>

          {/* Article Content */}
          <div className="flex flex-col gap-[20px]">
            
            {/* Introduction Section */}
            <div className="bg-gradient-to-br from-[#e3f2fd] to-[#bbdefb] rounded-[16px] p-[16px] shadow-[0px_4px_10px_0px_rgba(72,162,232,0.15)]">
              <p className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#121314] leading-relaxed mb-[8px]">
                Understanding Mental Well-Being in Elders
              </p>
              <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#555] leading-relaxed">
                Mental well-being refers to how we think, feel, and cope with life's ups and downs. For older adults, maintaining mental health is just as important as physical health.
              </p>
            </div>

            {/* What is Mental Well-Being Section */}
            <div className="bg-white rounded-[16px] p-[16px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] border border-gray-100">
              <p className="font-['Poppins:SemiBold',sans-serif] text-[15px] text-[#121314] leading-tight mb-[12px]">
                What Is Mental Well-Being?
              </p>
              <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#555] leading-relaxed mb-[10px]">
                Mental well-being is the emotional, psychological, and social balance that helps individuals:
              </p>
              <ul className="list-none flex flex-col gap-[8px] ml-[0px]">
                <li className="flex items-start gap-[8px]">
                  <div className="size-[6px] rounded-full bg-[#1F75BE] mt-[6px] shrink-0"></div>
                  <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#555] leading-relaxed">
                    Handle stress effectively
                  </p>
                </li>
                <li className="flex items-start gap-[8px]">
                  <div className="size-[6px] rounded-full bg-[#1F75BE] mt-[6px] shrink-0"></div>
                  <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#555] leading-relaxed">
                    Build positive relationships
                  </p>
                </li>
                <li className="flex items-start gap-[8px]">
                  <div className="size-[6px] rounded-full bg-[#1F75BE] mt-[6px] shrink-0"></div>
                  <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#555] leading-relaxed">
                    Make meaningful decisions
                  </p>
                </li>
                <li className="flex items-start gap-[8px]">
                  <div className="size-[6px] rounded-full bg-[#1F75BE] mt-[6px] shrink-0"></div>
                  <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#555] leading-relaxed">
                    Stay motivated and optimistic
                  </p>
                </li>
              </ul>
            </div>

            {/* Why is it Important Section */}
            <div className="bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] rounded-[16px] p-[16px] shadow-[0px_4px_10px_0px_rgba(16,185,129,0.15)] border-2 border-[#86efac]">
              <div className="flex items-center gap-[8px] mb-[12px]">
                <div className="bg-white rounded-[10px] p-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
                  <svg className="size-[20px]" fill="none" viewBox="0 0 24 24">
                    <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z" fill="#10b981"/>
                  </svg>
                </div>
                <p className="font-['Poppins:Bold',sans-serif] text-[15px] text-[#10b981] leading-tight">Why Is It Important?</p>
              </div>
              <div className="bg-white rounded-[10px] p-[14px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)]">
                <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#555] leading-relaxed mb-[10px]">
                  Good mental well-being:
                </p>
                <ul className="list-none flex flex-col gap-[8px] ml-[0px]">
                  <li className="flex items-start gap-[8px]">
                    <div className="size-[6px] rounded-full bg-[#10b981] mt-[6px] shrink-0"></div>
                    <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#555] leading-relaxed">
                      Promotes emotional stability and positive mood
                    </p>
                  </li>
                  <li className="flex items-start gap-[8px]">
                    <div className="size-[6px] rounded-full bg-[#10b981] mt-[6px] shrink-0"></div>
                    <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#555] leading-relaxed">
                      Reduces risks of depression, anxiety, and loneliness
                    </p>
                  </li>
                  <li className="flex items-start gap-[8px]">
                    <div className="size-[6px] rounded-full bg-[#10b981] mt-[6px] shrink-0"></div>
                    <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#555] leading-relaxed">
                      Improves sleep, memory, and overall health
                    </p>
                  </li>
                  <li className="flex items-start gap-[8px]">
                    <div className="size-[6px] rounded-full bg-[#10b981] mt-[6px] shrink-0"></div>
                    <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#555] leading-relaxed">
                      Encourages independence and engagement in daily activities
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* How to Take Care Section */}
            <div className="bg-gradient-to-br from-[#faf5ff] to-[#f3e8ff] rounded-[16px] p-[16px] shadow-[0px_4px_10px_0px_rgba(168,85,247,0.15)] border-2 border-[#e9d5ff]">
              <div className="flex items-center gap-[8px] mb-[12px]">
                <div className="bg-white rounded-[10px] p-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
                  <svg className="size-[20px]" fill="none" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#a855f7"/>
                  </svg>
                </div>
                <p className="font-['Poppins:Bold',sans-serif] text-[15px] text-[#a855f7] leading-tight">How to Take Care of Your Mental Well-Being</p>
              </div>
              <div className="bg-white rounded-[10px] p-[14px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)]">
                <ol className="list-none flex flex-col gap-[12px] ml-[0px]">
                  <li className="flex items-start gap-[10px]">
                    <div className="shrink-0 size-[24px] rounded-full bg-[#a855f7] flex items-center justify-center">
                      <p className="font-['Poppins:SemiBold',sans-serif] text-[11px] text-white">1</p>
                    </div>
                    <div className="flex-1">
                      <p className="font-['Poppins:SemiBold',sans-serif] text-[12px] text-[#a855f7] leading-tight mb-[4px]">Stay Connected</p>
                      <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#555] leading-relaxed">
                        Spend time with family, join social groups, or call friends regularly.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-[10px]">
                    <div className="shrink-0 size-[24px] rounded-full bg-[#a855f7] flex items-center justify-center">
                      <p className="font-['Poppins:SemiBold',sans-serif] text-[11px] text-white">2</p>
                    </div>
                    <div className="flex-1">
                      <p className="font-['Poppins:SemiBold',sans-serif] text-[12px] text-[#a855f7] leading-tight mb-[4px]">Stay Active</p>
                      <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#555] leading-relaxed">
                        Gentle exercises like walking, yoga, or stretching improve both body and mind.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-[10px]">
                    <div className="shrink-0 size-[24px] rounded-full bg-[#a855f7] flex items-center justify-center">
                      <p className="font-['Poppins:SemiBold',sans-serif] text-[11px] text-white">3</p>
                    </div>
                    <div className="flex-1">
                      <p className="font-['Poppins:SemiBold',sans-serif] text-[12px] text-[#a855f7] leading-tight mb-[4px]">Eat and Sleep Well</p>
                      <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#555] leading-relaxed">
                        Balanced meals and proper rest help regulate mood and energy.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* FAQs Section */}
            <div className="bg-white rounded-[16px] p-[16px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] border border-gray-100">
              <p className="font-['Poppins:Bold',sans-serif] text-[16px] text-[#121314] leading-tight mb-[16px]">
                FAQs
              </p>
              
              <div className="flex flex-col gap-[16px]">
                <div className="bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] rounded-[12px] p-[14px] border border-gray-200">
                  <p className="font-['Poppins:SemiBold',sans-serif] text-[13px] text-[#121314] leading-relaxed mb-[6px]">
                    Q1. What are early signs of poor mental well-being in elders?
                  </p>
                  <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#555] leading-relaxed">
                    <span className="font-['Poppins:SemiBold',sans-serif]">A:</span> Early signs include mood swings, forgetfulness, loss of interest in daily activities, changes in sleep or appetite, and withdrawal from social interactions.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] rounded-[12px] p-[14px] border border-gray-200">
                  <p className="font-['Poppins:SemiBold',sans-serif] text-[13px] text-[#121314] leading-relaxed mb-[6px]">
                    Q2. Can mental well-being improve with age?
                  </p>
                  <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#555] leading-relaxed">
                    <span className="font-['Poppins:SemiBold',sans-serif]">A:</span> Yes! Many elders develop greater emotional resilience and self-understanding over time. Engaging in social, physical, and mental activities can significantly enhance happiness and stability.
                  </p>
                </div>
              </div>
            </div>

            {/* Final Thought Section */}
            <div className="bg-gradient-to-br from-[#fff5e6] to-[#ffe8cc] rounded-[16px] p-[16px] shadow-[0px_4px_10px_0px_rgba(219,126,19,0.15)] border-2 border-[#ffd9a3]">
              <div className="flex items-start gap-[12px]">
                <div className="bg-white rounded-[10px] p-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0">
                  <p className="text-[20px]">🌺</p>
                </div>
                <div className="flex-1">
                  <p className="font-['Poppins:Bold',sans-serif] text-[14px] text-[#121314] leading-tight mb-[6px]">
                    Final Thought
                  </p>
                  <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#555] leading-relaxed">
                    Mental well-being is the foundation of a fulfilling life. By staying socially active, keeping the mind engaged, and seeking help when needed, elders can continue to lead meaningful, joyful lives.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
