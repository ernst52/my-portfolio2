import './Projects.css';
import ProjectCard from './ProjectCard';
import House from "../../assets/images/cyclop.jpg";
import Floyd from "../../assets/images/FFFF.jpg";
import Didol from "../../assets/images/DJJ.jpg";

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on recently.
        </p>
        
        <div className="projects-grid">
          <ProjectCard
            title="サイクロップス先輩"
            description="表紙に登場のメタリックな彼、 雄臭いカラダを隅々まで責め立てられ大悶絶！

                        チ○ポでガンガンに貫かれながらも勃起しっぱなし。 そのうえ三連結まで見事敢行。

                        掘られたまま大発射で快感フィニッシュ！(パッケージの説明より)"
            image={House}
            technologies={['鋼鉄のおちんちん', '祈り', '日本人']}
            link="https://www.nicovideo.jp/watch/sm43249687"
          />

          <ProjectCard
            title="FloydAI"
            description="Launched stealth on pump.fun with no presale, zero taxes, LP burnt and contract renounced, $FloydAI is a coin for the people, forever.
                         Girls rank cops below homeless people on popular dating apps.
                         The total supply of FloydAI is always 1,000,000,000.
                         Trust in AI."
            image={Floyd}
            technologies={['FentJS', 'NegroAPI', 'NiggaTech']}
            link="https://floydai.net/"
          />

          <ProjectCard
            title="Dildo Joystick"
            description="The Industrial Revolution and its consequences have been a disaster for the human race. They
                         have greatly increased the life-expectancy of those of us who live in “advanced” countries, but
                         they have destabilized society, have made life unfulfilling, have subjected human beings to
                         indignities, have led to widespread psychological suffering (in the Third World to physical
                         suffering as well) and have inflicted severe damage on the natural world. The continued
                         evelopment of technology will worsen the situation. "
            image={Didol}
            technologies={['Arduino', 'Ketchup', 'Sand']}
            link="https://x.com/shitpost_2077/status/1952986167994966489"
          />

        </div>
      </div>
    </section>
  );
}

export default Projects;