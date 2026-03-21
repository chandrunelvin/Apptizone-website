import { ComponentSubsection } from './sections/ComponentSubsection';
import { DivSubsection } from './sections/DivSubsection';
import { DivWrapperSubsection } from './sections/DivWrapperSubsection';
import { FrameSubsection } from './sections/FrameSubsection';
import { FrameWrapperSubsection } from './sections/FrameWrapperSubsection';

const Home = () => {
  return (
    <div className="relative w-full overflow-x-hidden bg-white">
      <div id="about">
        <FrameSubsection />
      </div>

      <div id="services">
        <FrameWrapperSubsection />
      </div>

      <ComponentSubsection />

      <div id="projects">
        <DivWrapperSubsection />
      </div>

      <DivSubsection />
    </div>
  );
};

export default Home;
