import './skills.scss';
import AnimatedLLine from '../AnimatedLLine/AnimatedLLine';
import SkillsSlider from './SkillsSlider';

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Mes compétences</h2>
      <p className="skills__subtitle">
        Les technologies que je maîtrise et que j'utilise au quotidien.
      </p>

      <SkillsSlider />

      <AnimatedLLine />
    </section>
  );
}
