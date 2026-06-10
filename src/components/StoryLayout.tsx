import Film from './Film';
import ChaptersTimeline from './ChaptersTimeline';

export default function StoryLayout() {
  return (
    <section id="story" className="w-full flex flex-col lg:flex-row relative bg-[#fdfbf7]">
      {/* Video Container: Sticky on Desktop */}
      <div className="w-full lg:w-[55%] xl:w-[60%] lg:sticky lg:top-0 lg:h-screen z-40 bg-black shadow-[10px_0_30px_rgba(0,0,0,0.1)] flex flex-col">
        <Film />
      </div>

      {/* Timeline Container: Scrolls */}
      <div className="w-full lg:w-[45%] xl:w-[40%] relative min-h-screen">
        <ChaptersTimeline />
      </div>
    </section>
  );
}
